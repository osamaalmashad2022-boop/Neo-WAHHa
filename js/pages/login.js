// Neo-WAHHa — Login Page
const LoginPage = {
  render() {
    Navbar.hide();
    const app = Utils.$('app');
    app.innerHTML = `
      <div class="login-page">
        <!-- Brand Side -->
        <div class="login-brand-side">
          <div class="login-header">
            <div class="logo-frame" style="width: 180px; height: 180px; margin: 0 auto var(--space-6); border-radius: var(--radius-lg);">
              <img src="assets/images/logo.png" alt="Neo-WAHHa" class="login-logo-img" style="height: 85%; margin-bottom: 0;">
            </div>
            <h1 class="login-title"><span class="text-gradient">Neo-WAHHa</span></h1>
            <p class="login-subtitle">واحة المستقبل — تعليم البرمجة للأطفال</p>
          </div>
        </div>

        <!-- Form Side -->
        <div class="login-form-side">
          <div class="login-container">
            <!-- University & Faculty Logos -->
            <div class="login-org-logos">
              <img src="assets/images/faculty-logo.jpg" alt="كلية التربية">
              <img src="assets/images/damietta-logo.jpg" alt="جامعة دمياط">
            </div>
            <div class="login-card">
              <div class="login-error" id="login-error"></div>
              <div class="input-group">
                <label for="login-username">👤 اسم المستخدم</label>
                <input type="text" class="input-field" id="login-username" placeholder="أدخل اسم المستخدم" autocomplete="username">
              </div>
              <div class="input-group">
                <label for="login-password">🔒 كلمة المرور</label>
                <input type="password" class="input-field" id="login-password" placeholder="أدخل كلمة المرور" autocomplete="current-password">
              </div>
              <button class="btn btn-primary btn-lg login-btn" id="login-btn">
                دخول 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    const usernameInput = Utils.$('login-username');
    const passwordInput = Utils.$('login-password');
    const loginBtn = Utils.$('login-btn');
    const errorEl = Utils.$('login-error');

    const doLogin = () => {
      const username = usernameInput.value.trim();
      const password = passwordInput.value;
      
      if (!username || !password) {
        errorEl.textContent = 'من فضلك أدخل اسم المستخدم وكلمة المرور';
        errorEl.style.display = 'block';
        return;
      }

      const result = Auth.login(username, password);
      if (result.success) {
        errorEl.style.display = 'none';
        App.navigate('home');
      } else {
        errorEl.textContent = result.message;
        errorEl.style.display = 'block';
        passwordInput.value = '';
      }
    };

    loginBtn.addEventListener('click', doLogin);
    passwordInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') doLogin();
    });
    usernameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') passwordInput.focus();
    });

    usernameInput.focus();
  }
};
