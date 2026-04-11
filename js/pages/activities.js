// Neo-WAHHa — Activities Page
const ActivitiesPage = {
  render() {
    Navbar.show();
    Navbar.setActive('activities');
    const app = Utils.$('app');

    // Collect all activities from all courses
    const allActivities = [];
    ALL_COURSES.forEach(course => {
      if (course.locked) return;
      course.lessons.forEach((lesson, li) => {
        // Code activities
        if (lesson.codeExamples.length > 0) {
          allActivities.push({
            type: 'code',
            title: `💻 نشاط: ${lesson.title}`,
            courseId: course.id,
            lessonIndex: li,
            code: lesson.codeExamples[0]
          });
        }
        // Quiz activities
        if (lesson.activities.length > 0) {
          lesson.activities.forEach(act => {
            allActivities.push({
              type: act.type,
              title: `🎯 ${act.type === 'sorting' ? 'ترتيب' : 'مطابقة'}: ${lesson.title}`,
              courseId: course.id,
              lessonIndex: li,
              data: act
            });
          });
        }
      });
    });

    // Final project
    const finalProject = HTML_COURSE.lessons.find(l => l.title.includes('المشروع النهائي'));

    app.innerHTML = `
      <div class="page page-with-nav">
        <div class="section-header">
          <h2>🎮 <span class="text-gradient">الأنشطة التفاعلية</span></h2>
          <p>طبّق ما تعلمته من خلال أنشطة عملية</p>
        </div>

        <!-- Final Project -->
        ${finalProject ? `
          <div class="card" style="margin-bottom: var(--space-8); border-color: var(--accent-orange); cursor: pointer;"
               onclick="App.navigate('lesson', {courseId: 'html', lessonIndex: ${HTML_COURSE.lessons.indexOf(finalProject)}})">
            <div style="display: flex; align-items: center; gap: var(--space-4);">
              <span style="font-size: 3rem;">🏆</span>
              <div>
                <h3 style="color: var(--accent-orange);">المشروع النهائي</h3>
                <p style="color: var(--text-secondary);">ابنِ موقعك الأول الكامل باستخدام كل ما تعلمته من HTML و CSS</p>
                <span class="badge badge-orange">مشروع متقدم</span>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Activities Grid -->
        <div class="grid-auto stagger">
          ${allActivities.map((act, i) => `
            <div class="activity-card" onclick="App.navigate('lesson', {courseId: '${act.courseId}', lessonIndex: ${act.lessonIndex}})">
              <span style="font-size: 2rem; display: block; margin-bottom: var(--space-3);">
                ${act.type === 'code' ? '💻' : act.type === 'sorting' ? '📦' : '🔗'}
              </span>
              <h3 style="font-size: var(--fs-base); margin-bottom: var(--space-2);">${act.title}</h3>
              <span class="badge badge-purple">${act.type === 'code' ? 'كتابة كود' : act.type === 'sorting' ? 'ترتيب' : 'مطابقة'}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
};
