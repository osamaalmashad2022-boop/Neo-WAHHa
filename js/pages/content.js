// Neo-WAHHa — Content Page (Course List + Lesson List)
const ContentPage = {
  render(params = {}) {
    Navbar.show();
    Navbar.setActive('content');
    const app = Utils.$('app');

    if (params.courseId) {
      this.renderCourseDetail(app, params.courseId);
    } else {
      this.renderCourseList(app);
    }
  },

  renderCourseList(app) {
    app.innerHTML = `
      <div class="page page-with-nav">
        <div class="section-header">
          <h2><span class="text-gradient">📚 المحتوى التعليمي</span></h2>
          <p>اختر الكورس الذي تريد تعلمه</p>
        </div>

        <div class="course-list stagger">
          ${ALL_COURSES.map(course => `
            <div class="course-card ${course.locked ? 'locked' : ''}" 
                 ${!course.locked ? `onclick="App.navigate('content', {courseId: '${course.id}'})"` : ''}>
              <div class="course-icon" style="background: ${course.color}22; border: 2px solid ${course.color}44;">
                <span style="font-size: 2.5rem;">${course.icon}</span>
              </div>
              <div class="course-info">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-meta">
                  ${course.locked 
                    ? '<span class="badge badge-locked">🔒 قريباً</span>' 
                    : `<span class="badge badge-purple">📖 ${course.lessons.length} درس</span>
                       <span class="badge badge-green">✅ ${ContentPage.getProgress(course.id)}% مكتمل</span>`
                  }
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  renderCourseDetail(app, courseId) {
    const course = ALL_COURSES.find(c => c.id === courseId);
    if (!course || course.locked) return this.renderCourseList(app);

    const completed = Utils.store.get('completedLessons', []);

    app.innerHTML = `
      <div class="page page-with-nav">
        <button class="back-btn" onclick="App.navigate('content')">→ العودة للكورسات</button>
        
        <div class="section-header" style="text-align: right;">
          <h2>${course.icon} ${course.title}</h2>
          <p>${course.description}</p>
          <div style="margin-top: var(--space-4); max-width: 400px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-2);">
              <span style="color: var(--text-secondary); font-size: var(--fs-sm);">التقدم</span>
              <span style="color: var(--accent-purple); font-weight: 700;">${ContentPage.getProgress(courseId)}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${ContentPage.getProgress(courseId)}%"></div>
            </div>
          </div>
        </div>

        <div class="lesson-list stagger">
          ${course.lessons.map((lesson, i) => {
            const isCompleted = completed.includes(lesson.id);
            const typeEmoji = lesson.type === 'exam' ? '📝' : lesson.type === 'challenge' ? '🎮' : lesson.type === 'lesson' ? '📖' : '🌟';
            return `
              <div class="lesson-item ${isCompleted ? 'completed' : ''}" 
                   onclick="App.navigate('lesson', {courseId: '${courseId}', lessonIndex: ${i}})">
                <span class="lesson-num">${i + 1}</span>
                <span class="lesson-item-title">${lesson.title}</span>
                <span class="lesson-item-badge">${isCompleted ? '✅' : typeEmoji}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  getProgress(courseId) {
    const course = ALL_COURSES.find(c => c.id === courseId);
    if (!course || course.lessons.length === 0) return 0;
    const completed = Utils.store.get('completedLessons', []);
    const done = course.lessons.filter(l => completed.includes(l.id)).length;
    return Math.round((done / course.lessons.length) * 100);
  }
};
