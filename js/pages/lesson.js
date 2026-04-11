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
      // Determine language from courseId for proper preview
      const editorLang = courseId === 'css' ? 'css' : courseId === 'js' ? 'js' : 'html';
      CodeEditor.create(editorContainer, lesson.codeExamples[0], { language: editorLang });
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
    activities.forEach((activity, activityIndex) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'activity-wrapper';
      wrapper.style.marginBottom = 'var(--space-8)';
      wrapper.style.background = 'rgba(0,0,0,0.2)';
      wrapper.style.padding = 'var(--space-4)';
      wrapper.style.borderRadius = 'var(--radius-lg)';
      wrapper.style.border = '1px solid var(--border-color)';
      
      if (activity.type === 'sorting') {
        let allItems = [];
        activity.categories.forEach((cat, catIdx) => {
          cat.items.forEach(item => {
            allItems.push({ text: item, catIdx });
          });
        });
        const bankItems = [...allItems].sort(() => Math.random() - 0.5);
        
        let html = `
          <h3 style="margin-bottom: var(--space-4); color: var(--neon-cyan);">📦 رتّب العناصر في الفئة الصحيحة</h3>
          <p style="color: var(--text-secondary); margin-bottom: var(--space-4);">اضغط على العنصر ثم اضغط على الفئة المناسبة لنقله.</p>
          
          <div class="sorting-bank" style="display: flex; flex-wrap: wrap; gap: var(--space-2); margin-bottom: var(--space-6); min-height: 60px; padding: var(--space-3); background: rgba(255,255,255,0.05); border-radius: var(--radius-md); border: 1px dashed var(--text-muted);">
            ${bankItems.map((item, i) => `
              <button class="badge badge-purple sorting-item" data-id="${i}" data-correct-cat="${item.catIdx}" style="cursor: pointer; font-size: var(--fs-md); padding: var(--space-2); border: 2px solid transparent;">
                ${Utils.escapeHtml(item.text)}
              </button>
            `).join('')}
          </div>
          
          <div class="grid-2 sorting-categories">
            ${activity.categories.map((cat, i) => `
              <div class="sorting-category" data-cat-idx="${i}" style="background: rgba(0,0,0,0.3); border: 2px solid var(--border-color); border-radius: var(--radius-md); padding: var(--space-4); cursor: pointer; transition: all 0.3s;">
                <h4 style="color: var(--neon-cyan); margin-bottom: var(--space-3); text-align: center;">${Utils.escapeHtml(cat.title)}</h4>
                <div class="category-items" style="display: flex; flex-direction: column; gap: var(--space-2); min-height: 50px;"></div>
              </div>
            `).join('')}
          </div>
          <div style="margin-top: var(--space-4); text-align: center;">
            <button class="btn btn-primary check-sorting-btn">تحقق من الإجابة</button>
          </div>
        `;
        wrapper.innerHTML = html;
        
        let selectedItem = null;
        const updateSelection = () => {
          wrapper.querySelectorAll('.sorting-item').forEach(el => {
            el.style.borderColor = el === selectedItem ? 'var(--neon-green)' : 'transparent';
            el.style.transform = el === selectedItem ? 'scale(1.05)' : 'scale(1)';
          });
        };

        wrapper.querySelectorAll('.sorting-item').forEach(el => {
          el.addEventListener('click', (e) => {
            e.stopPropagation();
            selectedItem = selectedItem === el ? null : el;
            updateSelection();
          });
        });
        
        wrapper.querySelectorAll('.sorting-category').forEach(catEl => {
          catEl.addEventListener('click', () => {
            if (selectedItem) {
              const itemsContainer = catEl.querySelector('.category-items');
              itemsContainer.appendChild(selectedItem);
              selectedItem.dataset.currentCat = catEl.dataset.catIdx;
              selectedItem = null;
              updateSelection();
            }
          });
        });
        
        const bank = wrapper.querySelector('.sorting-bank');
        bank.addEventListener('click', () => {
           if (selectedItem) {
              bank.appendChild(selectedItem);
              selectedItem.removeAttribute('data-current-cat');
              selectedItem = null;
              updateSelection();
           }
        });

        wrapper.querySelector('.check-sorting-btn').addEventListener('click', () => {
          let allCorrect = true;
          let totalMoved = 0;
          wrapper.querySelectorAll('.sorting-item').forEach(el => {
            const current = el.dataset.currentCat;
            if (current !== undefined) totalMoved++;
            const correct = el.dataset.correctCat;
            if (current === correct) {
              el.style.background = 'var(--neon-green)';
              el.style.color = 'black';
            } else {
              el.style.background = current === undefined ? '' : 'var(--accent-red)';
              el.style.color = current === undefined ? '' : 'white';
              allCorrect = false;
            }
          });
          
          if (totalMoved < bankItems.length) {
             Utils.showToast('رجاءً رتب جميع العناصر أولاً', 'error');
          } else if (allCorrect) {
             Utils.showToast('🎉 إجابة صحيحة! أحسنت صنعاً', 'success');
          } else {
             Utils.showToast('بعض العناصر في المكان الخاطئ، حاول مجدداً', 'error');
          }
        });

      } else if (activity.type === 'matching') {
        const leftItems = activity.items.map((it, i) => ({ text: it.choice, id: i }));
        const rightItems = [...activity.items].map((it, i) => ({ text: it.match, id: i })).sort(() => Math.random() - 0.5);
        
        let html = `
          <h3 style="margin-bottom: var(--space-4); color: var(--neon-purple);">🔗 ${activity.title || 'طابق العناصر'}</h3>
          <p style="color: var(--text-secondary); margin-bottom: var(--space-4);">اضغط على العنصر ثم اضغط على الوصف المناسب لتوصيلهما.</p>
          
          <div class="grid-2 matching-container" style="gap: var(--space-6);">
            <div class="matching-choices">
              ${leftItems.map(item => `
                <div class="matching-choice card" data-id="${item.id}" style="cursor: pointer; padding: var(--space-3); margin-bottom: var(--space-3); border: 2px solid var(--border-color); transition: all 0.2s;">
                  <code>${Utils.escapeHtml(item.text)}</code>
                  <div class="match-badge" style="display:none; margin-top: 5px; font-size: var(--fs-xs); color: var(--neon-cyan);">تم التوصيل</div>
                </div>
              `).join('')}
            </div>
            <div class="matching-targets">
              ${rightItems.map(item => `
                <div class="matching-target card" data-match-id="${item.id}" style="cursor: pointer; padding: var(--space-3); margin-bottom: var(--space-3); border: 2px dashed var(--border-color); transition: all 0.2s;">
                  ${Utils.escapeHtml(item.text)}
                </div>
              `).join('')}
            </div>
          </div>
          <div style="margin-top: var(--space-4); text-align: center;">
            <button class="btn btn-primary check-matching-btn">تحقق من التوصيل</button>
            <button class="btn btn-secondary reset-matching-btn" style="margin-right: var(--space-2);">إعادة ضبط</button>
          </div>
        `;
        wrapper.innerHTML = html;
        
        let selectedChoice = null;
        let connections = {}; // maps choiceId -> targetEl
        
        const updateMatchingSelection = () => {
          wrapper.querySelectorAll('.matching-choice').forEach(el => {
            if (el === selectedChoice) {
               el.style.borderColor = 'var(--neon-purple)';
               el.style.transform = 'translateY(-2px)';
            } else {
               el.style.borderColor = connections[el.dataset.id] ? 'var(--neon-green)' : 'var(--border-color)';
               el.style.transform = 'none';
               el.querySelector('.match-badge').style.display = connections[el.dataset.id] ? 'block' : 'none';
            }
          });
        };

        wrapper.querySelectorAll('.matching-choice').forEach(el => {
          el.addEventListener('click', () => {
            selectedChoice = selectedChoice === el ? null : el;
            updateMatchingSelection();
          });
        });
        
        wrapper.querySelectorAll('.matching-target').forEach(el => {
          el.addEventListener('click', () => {
            if (selectedChoice) {
              const choiceId = selectedChoice.dataset.id;
              Object.keys(connections).forEach(cId => {
                 if (connections[cId] === el) delete connections[cId];
              });
              connections[choiceId] = el;
              el.style.borderColor = 'var(--neon-purple)';
              el.style.background = 'rgba(168,85,247,0.1)';
              el.innerHTML = `<div style="font-size: var(--fs-xs); color: var(--neon-purple); margin-bottom: 5px;">موصول مع: ${selectedChoice.querySelector('code').innerText}</div>${Utils.escapeHtml(rightItems.find(r => r.id == el.dataset.matchId).text)}`;
              selectedChoice = null;
              updateMatchingSelection();
            }
          });
        });

        wrapper.querySelector('.check-matching-btn').addEventListener('click', () => {
           let allCorrect = true;
           let totalMatched = Object.keys(connections).length;
           if (totalMatched < leftItems.length) {
              Utils.showToast('رجاءً قم بتوصيل جميع العناصر', 'error');
              return;
           }
           Object.keys(connections).forEach(choiceId => {
              const target = connections[choiceId];
              if (target.dataset.matchId === choiceId) {
                 target.style.borderColor = 'var(--neon-green)';
                 target.style.background = 'rgba(16,185,129,0.1)';
              } else {
                 target.style.borderColor = 'var(--accent-red)';
                 target.style.background = 'rgba(239,68,68,0.1)';
                 allCorrect = false;
              }
           });
           if (allCorrect) {
              Utils.showToast('🎉 مذهل! كل التوصيلات صحيحة', 'success');
           } else {
              Utils.showToast('يوجد بعض الأخطاء في التوصيل، حاول تصحيحها', 'error');
           }
        });
        
        wrapper.querySelector('.reset-matching-btn').addEventListener('click', () => {
           connections = {};
           selectedChoice = null;
           wrapper.querySelectorAll('.matching-target').forEach(el => {
              el.style.borderColor = '';
              el.style.background = '';
              el.innerHTML = Utils.escapeHtml(rightItems.find(r => r.id == el.dataset.matchId).text);
           });
           updateMatchingSelection();
        });
      }
      container.appendChild(wrapper);
    });
  }
};
