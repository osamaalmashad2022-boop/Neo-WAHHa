// Neo-WAHHa — Profile Page
const ProfilePage = {
  render() {
    Navbar.show();
    Navbar.setActive('profile');
    const app = Utils.$('app');
    const user = Auth.getUser();
    const completed = Utils.store.get('completedLessons', []);
    const scores = Utils.store.get('examScores', {});

    const totalLessons = ALL_COURSES.reduce((sum, c) => sum + c.lessons.length, 0);
    const completedCount = completed.length;
    const progressPct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
    
    const examScore = scores['final-exam'];
    const lessonScores = Object.entries(scores).filter(([k]) => k !== 'final-exam');

    app.innerHTML = `
      <div class="page page-with-nav">
        <div class="profile-header">
          <div class="profile-avatar">👤</div>
          <div class="profile-info">
            <h2>${user.displayName}</h2>
            <p style="color: var(--text-secondary);">@${user.username}</p>
            <div style="margin-top: var(--space-3);">
              <span class="badge badge-purple">🎓 متعلم نشط</span>
            </div>
          </div>
        </div>

        <div class="profile-stats stagger" style="margin-bottom: var(--space-8);">
          <div class="stat-card">
            <span class="stat-value text-gradient">${completedCount}</span>
            <span class="stat-label">دروس مكتملة</span>
          </div>
          <div class="stat-card">
            <span class="stat-value text-gradient-blue">${totalLessons}</span>
            <span class="stat-label">إجمالي الدروس</span>
          </div>
          <div class="stat-card">
            <span class="stat-value" style="color: var(--neon-green);">${progressPct}%</span>
            <span class="stat-label">نسبة التقدم</span>
          </div>
          <div class="stat-card">
            <span class="stat-value" style="color: var(--accent-orange);">${examScore ? examScore.pct + '%' : '—'}</span>
            <span class="stat-label">درجة الاختبار النهائي</span>
          </div>
        </div>

        <!-- Progress per course -->
        <h3 style="margin-bottom: var(--space-4); color: var(--neon-purple);">📊 التقدم في الكورسات</h3>
        <div class="course-list" style="margin-bottom: var(--space-8);">
          ${ALL_COURSES.map(course => {
            if (course.locked) return '';
            const pct = ContentPage.getProgress(course.id);
            return `
              <div class="card" style="cursor: pointer;" onclick="App.navigate('content', {courseId: '${course.id}'})">
                <div style="display: flex; align-items: center; gap: var(--space-4); margin-bottom: var(--space-3);">
                  <span style="font-size: 2rem;">${course.icon}</span>
                  <div style="flex: 1;">
                    <h4>${course.title}</h4>
                    <div style="display: flex; justify-content: space-between; margin-top: var(--space-2);">
                      <span style="color: var(--text-secondary); font-size: var(--fs-sm);">${pct}% مكتمل</span>
                    </div>
                    <div class="progress-bar" style="margin-top: var(--space-2);">
                      <div class="progress-fill" style="width: ${pct}%"></div>
                    </div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Recent quiz scores -->
        ${lessonScores.length > 0 ? `
          <h3 style="margin-bottom: var(--space-4); color: var(--neon-cyan);">📋 درجات الاختبارات</h3>
          <div class="grid-auto">
            ${lessonScores.map(([id, s]) => `
              <div class="card" style="text-align: center;">
                <span style="display:block;font-size:2rem;margin-bottom:var(--space-2);">${s.pct >= 80 ? '⭐' : s.pct >= 60 ? '👍' : '📝'}</span>
                <div style="font-size:var(--fs-2xl);font-weight:900;color:${s.pct>=80?'var(--neon-green)':s.pct>=60?'var(--accent-orange)':'var(--accent-red)'};">${s.score}/${s.total}</div>
                <small style="color:var(--text-muted);">${Utils.formatDate(s.date)}</small>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }
};
