// Neo-WAHHa — Home Page
const HomePage = {
  render() {
    Navbar.show();
    Navbar.setActive('home');
    const app = Utils.$('app');
    app.innerHTML = `
      <div class="page page-with-nav">
        <!-- Hero Section -->
        <div class="home-hero">
          <div class="logo-frame hero-logo-frame">
            <img src="assets/images/logo.png" alt="Neo-WAHHa Logo" class="hero-logo-img">
          </div>
          <h1><span class="text-gradient">Neo-WAHHa</span><br>واحة المستقبل</h1>
          <p class="hero-description">
            مرحباً بك يا <strong style="color: var(--neon-cyan);">${Auth.getUser().displayName}</strong>! 
            هنا تبدأ رحلتك في عالم البرمجة. تعلّم، جرّب، وابنِ مواقعك الخاصة بطريقة ممتعة وتفاعلية!
          </p>
        </div>

        <!-- Importance Section -->
        <div class="home-importance">
          <div class="importance-card">
            <h3>🌟 لماذا البرمجة مهمة للأطفال؟</h3>
            <ul class="importance-points">
              <li>تنمية التفكير المنطقي وحل المشكلات</li>
              <li>بناء الإبداع والابتكار التقني</li>
              <li>الاستعداد لوظائف المستقبل</li>
              <li>تعلم لغة العصر الرقمي</li>
              <li>بناء مشاريع ممتعة بنفسك</li>
              <li>تطوير مهارات التواصل والعمل الجماعي</li>
            </ul>
          </div>
        </div>

        <!-- Section Cards -->
        <div class="section-header">
          <h2>🧭 <span class="text-gradient">استكشف المنصة</span></h2>
          <p>اختر القسم الذي تريد البدء منه</p>
        </div>

        <div class="section-cards stagger">
          <div class="section-card" onclick="App.navigate('content')">
            <span class="section-card-icon">📚</span>
            <h3>المحتوى التعليمي</h3>
            <p>تعلّم HTML, CSS, و JavaScript خطوة بخطوة مع شرح مبسط وأمثلة تفاعلية</p>
          </div>

          <div class="section-card" onclick="App.navigate('activities')">
            <span class="section-card-icon">🎮</span>
            <h3>الأنشطة التفاعلية</h3>
            <p>طبّق ما تعلمته من خلال أنشطة عملية وتحديات برمجية ممتعة</p>
          </div>

          <div class="section-card" onclick="App.navigate('exam')">
            <span class="section-card-icon">📝</span>
            <h3>الاختبارات</h3>
            <p>اختبر معلوماتك واكتشف مستواك في البرمجة</p>
          </div>

          <div class="section-card" onclick="App.navigate('profile')">
            <span class="section-card-icon">👤</span>
            <h3>صفحة المتعلم</h3>
            <p>تابع تقدمك ودرجاتك وإنجازاتك</p>
          </div>

          <div class="section-card" onclick="App.navigate('discussion')">
            <span class="section-card-icon">💬</span>
            <h3>لوحة النقاش</h3>
            <p>تواصل مع زملائك وناقش ما تتعلمه</p>
          </div>

          <div class="section-card" onclick="App.navigate('support')">
            <span class="section-card-icon">📞</span>
            <h3>التواصل والدعم</h3>
            <p>تواصل مع فريق الدعم والقائمين على المنصة</p>
          </div>
        </div>
      </div>
    `;
  }
};
