// Neo-WAHHa — Navbar Component
const Navbar = {
  init() {
    const navbar = Utils.$('main-navbar');
    const toggle = Utils.$('navbar-toggle');
    const links = Utils.$('navbar-links');
    const logoutBtn = Utils.$('logout-btn');
    const usernameEl = Utils.$('navbar-username');

    if (Auth.isLoggedIn()) {
      navbar.classList.remove('hidden');
      usernameEl.textContent = Auth.getUser().displayName;
    }

    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });

    logoutBtn.addEventListener('click', () => {
      Auth.logout();
      App.navigate('login');
    });

    // Nav link clicks
    Utils.qsa('.nav-link', navbar).forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        App.navigate(page);
        links.classList.remove('open');
      });
    });
  },

  setActive(page) {
    Utils.qsa('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.page === page);
    });
  },

  show() {
    Utils.$('main-navbar').classList.remove('hidden');
    if (Auth.isLoggedIn()) {
      Utils.$('navbar-username').textContent = Auth.getUser().displayName;
    }
  },

  hide() {
    Utils.$('main-navbar').classList.add('hidden');
  }
};
