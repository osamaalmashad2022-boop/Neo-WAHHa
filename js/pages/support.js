// Neo-WAHHa — Support Page
const SupportPage = {
  render() {
    Navbar.show();
    Navbar.setActive('support');
    const app = Utils.$('app');

    app.innerHTML = `
      <div class="page page-with-nav">
        <div class="section-header">
          <h2><span class="text-gradient">📞 التواصل والدعم</span></h2>
          <p>فريق العمل القائم على منصة Neo-WAHHa</p>
        </div>

        <!-- Supervisors -->
        <h3 style="margin-bottom: var(--space-4); color: var(--neon-purple); text-align: center;">👨‍🏫 تحت إشراف</h3>
        <div class="grid-2" style="max-width: 600px; margin: 0 auto var(--space-8);">
          <div class="team-card" style="border-color: var(--accent-orange);">
            <div class="team-avatar" style="background: var(--gradient-sunset);">👨‍🏫</div>
            <h3>د/ رامي رشاد</h3>
            <p class="role">مشرف أكاديمي</p>
          </div>
          <div class="team-card" style="border-color: var(--accent-blue);">
            <div class="team-avatar" style="background: var(--gradient-blue);">👨‍💻</div>
            <h3>م/ عمار عماد</h3>
            <p class="role">مشرف تقني</p>
          </div>
        </div>

        <!-- Team Members -->
        <h3 style="margin-bottom: var(--space-4); color: var(--neon-cyan); text-align: center;">👥 فريق العمل</h3>
        <div class="support-grid stagger" style="margin-bottom: var(--space-8);">
          <div class="team-card">
            <div class="team-avatar" style="background: var(--gradient-sunset);">👨‍💻</div>
            <h3>وليد يحيي الشافعي</h3>
            <p class="role">عضو فريق التطوير</p>
          </div>
          <div class="team-card">
            <div class="team-avatar" style="background: var(--gradient-green);">👩‍💻</div>
            <h3>هاجر رفعت سلامه</h3>
            <p class="role">عضو فريق التطوير</p>
          </div>
          <div class="team-card">
            <div class="team-avatar" style="background: var(--gradient-blue);">👩‍💻</div>
            <h3>آية حسن غازي</h3>
            <p class="role">عضو فريق التطوير</p>
          </div>
          <div class="team-card">
            <div class="team-avatar" style="background: var(--gradient-purple);">👩‍💻</div>
            <h3>حنين أحمد رضا</h3>
            <p class="role">عضو فريق التطوير</p>
          </div>
        </div>

        <!-- Contact Info -->
        <h3 style="margin-bottom: var(--space-4); color: var(--neon-green); text-align: center;">📧 تواصل معنا</h3>
        <div class="card" style="max-width: 600px; margin: 0 auto;">
          <div style="display: grid; gap: var(--space-4);">
            <div style="display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3); background: rgba(0,0,0,0.2); border-radius: var(--radius-md);">
              <span style="font-size: 1.5rem;">📧</span>
              <div>
                <strong>البريد الإلكتروني</strong>
                <p style="color: var(--accent-cyan); font-size: var(--fs-sm);">support@neo-wahha.edu</p>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3); background: rgba(0,0,0,0.2); border-radius: var(--radius-md);">
              <span style="font-size: 1.5rem;">📱</span>
              <div>
                <strong>واتساب</strong>
                <p style="color: var(--accent-cyan); font-size: var(--fs-sm);">+20 100 000 0000</p>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3); background: rgba(0,0,0,0.2); border-radius: var(--radius-md);">
              <span style="font-size: 1.5rem;">🌐</span>
              <div>
                <strong>الموقع</strong>
                <p style="color: var(--accent-cyan); font-size: var(--fs-sm); direction: ltr; text-align: right;">
                  <a href="https://neo-wah-ha.vercel.app/" target="_blank" style="color: inherit; text-decoration: none; transition: 0.3s; cursor: pointer;">https://neo-wah-ha.vercel.app/</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="card" style="max-width: 600px; margin: var(--space-8) auto 0;">
          <h3 style="margin-bottom: var(--space-4);">✉️ أرسل رسالة</h3>
          <div class="input-group">
            <label>الموضوع</label>
            <input type="text" class="input-field" id="support-subject" placeholder="عنوان الرسالة">
          </div>
          <div class="input-group">
            <label>الرسالة</label>
            <textarea class="input-field" id="support-message" placeholder="اكتب رسالتك هنا..."></textarea>
          </div>
          <button class="btn btn-primary" onclick="Utils.showToast('✅ تم إرسال رسالتك بنجاح!')">إرسال 📤</button>
        </div>
      </div>
    `;
  }
};
