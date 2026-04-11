// Neo-WAHHa — Main Application (Router)
const App = {
  currentPage: null,
  currentParams: null,

  init() {
    // Check authentication
    const isLoggedIn = Auth.init();
    
    if (!isLoggedIn) {
      this.navigate('login');
    } else {
      // Check URL hash
      const hash = window.location.hash.slice(1) || 'home';
      this.navigate(hash);
    }

    // Handle browser back/forward
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1) || 'home';
      if (hash !== this.currentPage) {
        this.navigate(hash, {}, false);
      }
    });

    // Initialize navbar
    Navbar.init();

    // Global logo zoom logic
    this.initLogoZoom();
  },

  initLogoZoom() {
    const modal = Utils.$('logo-modal');
    const closeBtn = Utils.$('logo-modal-close');

    if (!modal || !closeBtn) return;

    // Handle clicks on any logo with zoomable class or specific selectors
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('navbar-logo-img') || e.target.classList.contains('login-logo-img') || e.target.classList.contains('hero-logo-img')) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scroll
      }
    });

    const closeModal = () => {
      modal.classList.add('hidden');
      document.body.style.overflow = ''; // Restore scroll
    };

    closeBtn.onclick = closeModal;
    modal.onclick = (e) => {
      if (e.target === modal) closeModal();
    };
  },

  navigate(page, params = {}, pushState = true) {
    // Guard: redirect to login if not authenticated
    if (page !== 'login' && !Auth.isLoggedIn()) {
      page = 'login';
    }

    this.currentPage = page;
    this.currentParams = params;

    // Update URL hash
    if (pushState) {
      window.location.hash = page;
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Route to the correct page
    switch (page) {
      case 'login':
        LoginPage.render();
        break;
      case 'home':
        HomePage.render();
        break;
      case 'content':
        ContentPage.render(params);
        break;
      case 'lesson':
        LessonPage.render(params);
        break;
      case 'activities':
        ActivitiesPage.render();
        break;
      case 'exam':
        ExamPage.render();
        break;
      case 'profile':
        ProfilePage.render();
        break;
      case 'discussion':
        DiscussionPage.render();
        break;
      case 'support':
        SupportPage.render();
        break;
      default:
        HomePage.render();
    }
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => App.init());
