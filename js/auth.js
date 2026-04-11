// Neo-WAHHa — Authentication Module
const Auth = {
  currentUser: null,

  init() {
    const saved = Utils.store.get('currentUser');
    if (saved && USERS_DB[saved.username]) {
      this.currentUser = saved;
      return true;
    }
    return false;
  },

  login(username, password) {
    const user = USERS_DB[username];
    if (user && user.password === password) {
      this.currentUser = { username: user.username, displayName: user.displayName };
      Utils.store.set('currentUser', this.currentUser);
      return { success: true };
    }
    return { success: false, message: 'اسم المستخدم أو كلمة المرور غير صحيحة' };
  },

  logout() {
    this.currentUser = null;
    Utils.store.remove('currentUser');
  },

  getUser() {
    return this.currentUser;
  },

  isLoggedIn() {
    return this.currentUser !== null;
  }
};
