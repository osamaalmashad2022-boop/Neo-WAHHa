// Neo-WAHHa — Lesson Page
const LessonPage = {
  render(params = {}) {
    Navbar.show();
    Navbar.setActive('content');
    const app = Utils.$('app');
    const { courseId, lessonIndex } = params;
    
    const course = ALL_COURSES.find(c => c.id === courseId);
    if (!course) return App.navigate('content');
    
    const lesson = course.lessons[lessonIndex];
    if (!lesson) return App.navigate('content', { courseId });

    const prevLesson = lessonIndex > 0 ? lessonIndex - 1 : null;
    const nextLesson = lessonIndex < course.lessons.length - 1 ? lessonIndex + 1 : null;

    app.innerHTML = `
      <div class="page page-with-nav lesson-page">
        <button class="back-btn" onclick="App.navigate('content', {courseId: '${courseId}'})">→ العودة لقائمة الدروس</button>
        
        <div class="lesson-content">
          <h1>${lesson.title}</h1>
          
          <div id="lesson-body"></div>

          ${lesson.codeExamples.length > 0 ? `
            <div class="lesson-section">
              <h2>💻 محرر الأكواد التفاعلي</h2>
              <p style="color: var(--text-secondary); margin-bottom: var(--space-4);">اكتب الكود وشاهد النتيجة مباشرة!</p>
              <div id="lesson-editor"></div>
            </div>
          ` : ''}

          ${lesson.questions.length > 0 ? `
            <div class="lesson-section">
              <h2>❓ اختبر نفسك</h2>
              <div id="lesson-quiz"></div>
            </div>
          ` : ''}

          ${lesson.activities.length > 0 ? `
            <div class="lesson-section">
              <h2>🎯 أنشطة تفاعلية</h2>
              <div id="lesson-activities"></div>
            </div>
          ` : ''}
        </div>

        <!-- Navigation -->
        <div class="lesson-nav" style="margin-top: var(--space-8);">
          ${prevLesson !== null 
            ? `<button class="btn btn-secondary" onclick="App.navigate('lesson', {courseId:'${courseId}', lessonIndex:${prevLesson}})">→ الدرس السابق</button>`
            : '<div></div>'
          }
          <button class="btn btn-success" id="complete-lesson-btn">✅ إكمال الدرس</button>
          ${nextLesson !== null 
            ? `<button class="btn btn-primary" onclick="App.navigate('lesson', {courseId:'${courseId}', lessonIndex:${nextLesson}})">الدرس التالي ←</button>`
            : '<div></div>'
          }
        </div>
      </div>
    `;

    // Render content sections
    const body = Utils.$('lesson-body');
    lesson.content.forEach(section => {
      if (section.type === 'text') {
        const div = document.createElement('div');
        div.className = 'lesson-section';
        div.innerHTML = Utils.renderContent(section.text);
        body.appendChild(div);
      } else if (section.type === 'tabs') {
        const tabsDiv = document.createElement('div');
        tabsDiv.className = 'lesson-section tabs';
        let tabsHeaderHtml = '<div class="tabs-header">';
        let tabsContentHtml = '';
        section.tabs.forEach((tab, ti) => {
          tabsHeaderHtml += `<button class="tab-btn ${ti === 0 ? 'active' : ''}" data-tab="tab-${ti}">${tab.label}</button>`;
          tabsContentHtml += `<div class="tab-content ${ti === 0 ? 'active' : ''}" id="tab-${ti}">${Utils.renderContent(tab.content)}</div>`;
        });
        tabsHeaderHtml += '</div>';
        tabsDiv.innerHTML = tabsHeaderHtml + tabsContentHtml;
        body.appendChild(tabsDiv);

        // Tab switching
        Utils.qsa('.tab-btn', tabsDiv).forEach(btn => {
          btn.addEventListener('click', () => {
            Utils.qsa('.tab-btn', tabsDiv).forEach(b => b.classList.remove('active'));
            Utils.qsa('.tab-content', tabsDiv).forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            const target = tabsDiv.querySelector(`#${btn.dataset.tab}`);
            if (target) target.classList.add('active');
          });
        });
      } else if (section.type === 'process') {
        const div = document.createElement('div');
        div.className = 'lesson-section';
        div.innerHTML = '<h3>📋 الخطوات</h3>' + section.steps.map((s, i) => 
          `<div style="display:flex;gap:var(--space-3);margin:var(--space-3) 0;padding:var(--space-3);background:rgba(0,0,0,0.2);border-radius:var(--radius-md);align-items:flex-start;">
            <span style="background:var(--gradient-purple);color:white;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:var(--fs-sm);font-weight:700;">${i+1}</span>
            <div>${Utils.renderContent(s)}</div>
          </div>`
        ).join('');
        body.appendChild(div);
      } else if (section.type === 'timeline') {
        const div = document.createElement('div');
        div.className = 'lesson-section';
        div.innerHTML = section.events.map(ev => 
          `<div style="border-right:3px solid var(--accent-purple);padding:var(--space-4);margin-right:var(--space-4);margin-bottom:var(--space-4);">
            <span class="badge badge-purple">${ev.date}</span>
            <div style="margin-top:var(--space-2);">${Utils.renderContent(ev.content)}</div>
          </div>`
        ).join('');
        body.appendChild(div);
      } else if (section.type === 'list') {
        const div = document.createElement('div');
        div.className = 'lesson-section';
        const tag = section.mode === 'Numbered' ? 'ol' : 'ul';
        div.innerHTML = `<${tag}>${section.items.map(item => `<li style="margin-bottom:var(--space-2);color:var(--text-secondary);">${Utils.escapeHtml(item)}</li>`).join('')}</${tag}>`;
        body.appendChild(div);
      } else if (section.type === 'accordion') {
        const div = document.createElement('div');
        div.className = 'lesson-section';
        div.innerHTML = section.items.map(item =>
          `<details style="margin-bottom:var(--space-3);background:rgba(0,0,0,0.2);border-radius:var(--radius-md);border:1px solid var(--border-color);">
            <summary style="padding:var(--space-3) var(--space-4);cursor:pointer;font-weight:600;">${Utils.escapeHtml(item.title)}</summary>
            <div style="padding:var(--space-4);border-top:1px solid var(--border-color);">${Utils.renderContent(item.content)}</div>
          </details>`
        ).join('');
        body.appendChild(div);
      } else if (section.type === 'flashcards') {
        const div = document.createElement('div');
        div.className = 'lesson-section';
        div.innerHTML = '<h3>🃏 بطاقات المراجعة</h3><div class="grid-auto">' + section.cards.map(card =>
          `<div class="card" style="cursor:pointer;text-align:center;min-height:120px;display:flex;align-items:center;justify-content:center;" 
                onclick="this.querySelector('.fc-back').style.display=this.querySelector('.fc-back').style.display==='none'?'block':'none';this.querySelector('.fc-front').style.display=this.querySelector('.fc-front').style.display==='none'?'block':'none';">
            <div>
              <div class="fc-front"><strong>${Utils.escapeHtml(card.front)}</strong><br><small style="color:var(--text-muted);">اضغط للكشف</small></div>
              <div class="fc-back" style="display:none;color:var(--neon-green);">${Utils.escapeHtml(card.back)}</div>
            </div>
          </div>`
        ).join('') + '</div>';
        body.appendChild(div);
      }
    });

    // Render code editor
    if (lesson.codeExamples.length > 0) {
      const editorContainer = Utils.$('lesson-editor');
      CodeEditor.create(editorContainer, lesson.codeExamples[0]);
    }

    // Render quiz
    if (lesson.questions.length > 0) {
      const quizContainer = Utils.$('lesson-quiz');
      Quiz.render(quizContainer, lesson.questions, { examId: lesson.id });
    }

    // Render activities
    if (lesson.activities.length > 0) {
      const activitiesContainer = Utils.$('lesson-activities');
      LessonPage.renderActivities(activitiesContainer, lesson.activities);
    }

    // Complete lesson button
    Utils.$('complete-lesson-btn').addEventListener('click', () => {
      const completed = Utils.store.get('completedLessons', []);
      if (!completed.includes(lesson.id)) {
        completed.push(lesson.id);
        Utils.store.set('completedLessons', completed);
      }
      Utils.showToast('🎉 أحسنت! تم إكمال الدرس');
      if (nextLesson !== null) {
        setTimeout(() => App.navigate('lesson', { courseId, lessonIndex: nextLesson }), 1000);
      }
    });
  },

  renderActivities(container, activities) {
    activities.forEach((activity, ai) => {
      const div = document.createElement('div');
      div.style.marginBottom = 'var(--space-6)';
      
      if (activity.type === 'sorting') {
        div.innerHTML = `
          <h3 style="margin-bottom: var(--space-4);">📦 رتّب العناصر في الفئة الصحيحة</h3>
          <div class="grid-2">
            ${activity.categories.map(cat => `
              <div class="card">
                <h4 style="color: var(--neon-cyan); margin-bottom: var(--space-3);">${Utils.escapeHtml(cat.title)}</h4>
                <ul style="list-style: none;">
                  ${cat.items.map(item => `
                    <li style="padding: var(--space-2) var(--space-3); background: rgba(0,0,0,0.2); border-radius: var(--radius-sm); margin-bottom: var(--space-2);">
                      <code>${Utils.escapeHtml(item)}</code>
                    </li>
                  `).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        `;
      } else if (activity.type === 'matching') {
        div.innerHTML = `
          <h3 style="margin-bottom: var(--space-4);">🔗 ${activity.title || 'طابق العناصر'}</h3>
          <div class="grid-2">
            <div>
              <h4 style="color: var(--neon-purple); margin-bottom: var(--space-3);">العنصر</h4>
              ${activity.items.map(item => `
                <div style="padding: var(--space-3); background: rgba(168,85,247,0.1); border: 1px solid rgba(168,85,247,0.2); border-radius: var(--radius-sm); margin-bottom: var(--space-2);">
                  <code>${Utils.escapeHtml(item.choice)}</code>
                </div>
              `).join('')}
            </div>
            <div>
              <h4 style="color: var(--neon-green); margin-bottom: var(--space-3);">الوصف</h4>
              ${activity.items.map(item => `
                <div style="padding: var(--space-3); background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.2); border-radius: var(--radius-sm); margin-bottom: var(--space-2);">
                  ${Utils.escapeHtml(item.match)}
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }
      container.appendChild(div);
    });
  }
};
