// Neo-WAHHa — Navbar Component
const Navbar = {
  init() {
    const navbar = Utils.$('main-navbar');
    const toggle = Utils.$('navbar-toggle');
    const links = Utils.$('navbar-links');
    const logoutBtn = Utils.$('logout-btn');
    const usernameEl = Utils.$('navbar-username');
    const brandHome = Utils.$('navbar-brand-home');
    const themeToggleBtn = Utils.$('theme-toggle-btn');

    if (themeToggleBtn) {
      // Initialize icon based on current theme
      const savedTheme = localStorage.getItem('neo_wahha_theme');
      if (savedTheme === 'light') {
        themeToggleBtn.textContent = '🌙';
      }

      themeToggleBtn.addEventListener('click', () => {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        if (isLight) {
          document.documentElement.removeAttribute('data-theme');
          localStorage.setItem('neo_wahha_theme', 'dark');
          themeToggleBtn.textContent = '☀️';
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('neo_wahha_theme', 'light');
          themeToggleBtn.textContent = '🌙';
        }
      });
    }

    if (brandHome) {
      brandHome.addEventListener('click', () => App.navigate('home'));
    }

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

    // Nav link clicks (top-level links)
    Utils.qsa('.nav-link:not(.nav-dropdown-toggle)', navbar).forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        App.navigate(page);
        links.classList.remove('open');
      });
    });

    // Dropdown toggle
    const dropdownToggle = Utils.$('dropdown-toggle-tools');
    const dropdownContainer = Utils.$('nav-dropdown-tools');
    if (dropdownToggle && dropdownContainer) {
      dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropdownContainer.classList.toggle('open');
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!dropdownContainer.contains(e.target)) {
          dropdownContainer.classList.remove('open');
        }
      });
    }

    // Dropdown item clicks
    Utils.qsa('.nav-dropdown-item', navbar).forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const page = item.dataset.page;
        App.navigate(page);
        links.classList.remove('open');
        if (dropdownContainer) dropdownContainer.classList.remove('open');
      });
    });
  },

  setActive(page) {
    // Update top-level nav links
    Utils.qsa('.nav-link:not(.nav-dropdown-toggle)').forEach(link => {
      link.classList.toggle('active', link.dataset.page === page);
    });
    // Update dropdown items
    Utils.qsa('.nav-dropdown-item').forEach(item => {
      item.classList.toggle('active', item.dataset.page === page);
    });
    // If any dropdown item is active, highlight the toggle too
    const dropdownToggle = Utils.$('dropdown-toggle-tools');
    if (dropdownToggle) {
      const anyDropdownActive = ['profile', 'discussion', 'support'].includes(page);
      dropdownToggle.classList.toggle('active', anyDropdownActive);
    }

    // Hide/show home link based on current page
    const homeLink = Utils.$('nav-home-link');
    if (homeLink) {
      homeLink.style.display = (page === 'home') ? 'none' : '';
    }
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
