// Neo-WAHHa — Quiz Component
const Quiz = {
  render(container, questions, options = {}) {
    if (!questions || questions.length === 0) return;
    
    let score = 0;
    let answered = 0;
    const total = questions.length;

    let html = '<div class="quiz-container">';
    
    if (options.title) {
      html += `<h2 style="margin-bottom: var(--space-6); color: var(--neon-cyan);">${options.title}</h2>`;
    }

    questions.forEach((q, qi) => {
      html += `
        <div class="quiz-question" id="quiz-q-${qi}">
          <h3>❓ ${Utils.renderContent(q.question.replace(/^#+\s*/, '')).replace(/<\/?p>/g, '')}</h3>
          <div class="quiz-options">
      `;
      q.options.forEach((opt, oi) => {
        html += `
          <div class="quiz-option" data-qi="${qi}" data-oi="${oi}" data-correct="${opt.correct}" id="quiz-opt-${qi}-${oi}">
            <span style="font-size: var(--fs-lg);">
              ${String.fromCharCode(9398 + oi)}
            </span>
            <span>${Utils.escapeHtml(opt.text)}</span>
          </div>
        `;
      });
      html += `
          </div>
          <div class="quiz-feedback" id="quiz-fb-${qi}" style="display:none;"></div>
        </div>
      `;
    });

    html += `
      <div class="quiz-score" id="quiz-score" style="display:none;">
        <span style="font-size:3rem; display:block; margin-bottom: var(--space-4);">🏆</span>
        <div class="score-number text-gradient" id="quiz-score-text"></div>
        <p style="color: var(--text-secondary); margin-top: var(--space-3); margin-bottom: var(--space-4);" id="quiz-score-msg"></p>
        <button id="quiz-retake-btn" class="btn btn-primary" style="display:none; margin: 0 auto;">إعادة الاختبار 🔄</button>
      </div>
    </div>`;

    container.innerHTML = html;

    // Add click handlers
    Utils.qsa('.quiz-option', container).forEach(opt => {
      opt.addEventListener('click', () => {
        const qi = parseInt(opt.dataset.qi);
        const oi = parseInt(opt.dataset.oi);
        const isCorrect = opt.dataset.correct === 'true';
        const questionEl = Utils.$(`quiz-q-${qi}`);
        const feedbackEl = Utils.$(`quiz-fb-${qi}`);

        // Prevent re-answering
        if (questionEl.dataset.answered) return;
        questionEl.dataset.answered = 'true';

        answered++;
        if (options.onAnswer) options.onAnswer(answered, total);

        // Highlight correct/incorrect
        Utils.qsa('.quiz-option', questionEl).forEach(o => {
          o.style.cursor = 'not-allowed';
          if (o.dataset.correct === 'true') o.classList.add('correct');
        });

        if (isCorrect) {
          score++;
          opt.classList.add('correct');
          feedbackEl.style.background = 'rgba(16,185,129,0.1)';
          feedbackEl.style.color = 'var(--neon-green)';
          feedbackEl.innerHTML = '✅ ' + Utils.renderContent(questions[qi].options[oi].feedback || 'إجابة صحيحة!').replace(/<\/?p>/g, '');
        } else {
          opt.classList.add('incorrect');
          feedbackEl.style.background = 'rgba(239,68,68,0.1)';
          feedbackEl.style.color = 'var(--accent-red)';
          feedbackEl.innerHTML = '❌ ' + Utils.renderContent(questions[qi].options[oi].feedback || 'إجابة خاطئة').replace(/<\/?p>/g, '');
        }
        feedbackEl.style.display = 'block';

        // Show score when all answered
        if (answered === total) {
          const scoreEl = Utils.$('quiz-score');
          const scoreText = Utils.$('quiz-score-text');
          const scoreMsg = Utils.$('quiz-score-msg');
          scoreEl.style.display = 'block';
          scoreText.textContent = `${score} / ${total}`;
          const pct = Math.round((score / total) * 100);
          scoreMsg.textContent = pct >= 80 ? 'ممتاز! أنت نجم! ⭐' : pct >= 60 ? 'جيد! استمر في التعلم 💪' : 'حاول مرة أخرى 🔄';
          
          // Save score
          if (options.examId) {
            const scores = Utils.store.get('examScores', {});
            scores[options.examId] = { score, total, pct, date: Date.now() };
            Utils.store.set('examScores', scores);
          }

          if (options.onRetake) {
            const retakeBtn = Utils.$('quiz-retake-btn');
            retakeBtn.style.display = 'inline-block';
            retakeBtn.onclick = () => options.onRetake();
          }

          if (options.onComplete) options.onComplete(score, total);
        }
      });
    });
  }
};
