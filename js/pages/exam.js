// Neo-WAHHa — Exam Page
const ExamPage = {
  render() {
    Navbar.show();
    Navbar.setActive('exam');
    const app = Utils.$('app');

    // Collect all questions from all exam/challenge lessons
    const allQuestions = [];
    ALL_COURSES.forEach(course => {
      if (course.locked) return;
      course.lessons.forEach(lesson => {
        if (lesson.questions.length > 0) {
          lesson.questions.forEach(q => {
            if (q.options && q.options.length > 0) {
              allQuestions.push(q);
            }
          });
        }
      });
    });

    // Get previous score
    const prevScore = Utils.store.get('examScores', {})['final-exam'];

    app.innerHTML = `
      <div class="page page-with-nav">
        <div class="section-header">
          <h2>📝 <span class="text-gradient">الاختبار النهائي الشامل</span></h2>
          <p>اختبار على جميع الموضوعات — ${allQuestions.length} سؤال</p>
          ${prevScore ? `
            <div style="margin-top: var(--space-4);">
              <span class="badge badge-green">آخر نتيجة: ${prevScore.score}/${prevScore.total} (${Math.round(prevScore.pct)}%)</span>
            </div>
          ` : ''}
        </div>

        <div class="exam-progress">
          <div class="progress-text" id="exam-progress-text">0 / ${allQuestions.length} سؤال</div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 0%;" id="exam-progress-fill"></div>
          </div>
        </div>

        <div id="exam-container"></div>
      </div>
    `;

    const examContainer = Utils.$('exam-container');
    Quiz.render(examContainer, allQuestions, {
      title: '🎓 أجب على جميع الأسئلة',
      examId: 'final-exam',
      onAnswer: (answered, total) => {
        const fill = Utils.$('exam-progress-fill');
        const text = Utils.$('exam-progress-text');
        if (fill) fill.style.width = Math.round((answered / total) * 100) + '%';
        if (text) text.textContent = `${answered} / ${total} سؤال`;
      },
      onRetake: () => {
        ExamPage.render();
      },
      onComplete: (score, total) => {
        Utils.showToast(`🏆 اكتملت! نتيجتك: ${score}/${total}`);
      }
    });
  }
};
