// Neo-WAHHa — Utility Functions

const Utils = {
  // Get element by ID
  $(id) { return document.getElementById(id); },

  // Query selector
  qs(sel, parent = document) { return parent.querySelector(sel); },
  qsa(sel, parent = document) { return parent.querySelectorAll(sel); },

  // Escape HTML
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  },

  // Generate ID
  genId() { return Math.random().toString(36).substring(2, 9); },

  // Format time
  formatTime(date) {
    return new Date(date).toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
  },

  formatDate(date) {
    return new Date(date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'short', day: 'numeric' });
  },

  // Toast notification
  showToast(message, type = 'success') {
    let toast = Utils.$('app-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.className = `toast toast-${type} show`;
    setTimeout(() => toast.classList.remove('show'), 3000);
  },

  // Local storage helpers
  store: {
    get(key, fallback = null) {
      try {
        const val = localStorage.getItem(`nwh_${key}`);
        return val ? JSON.parse(val) : fallback;
      } catch { return fallback; }
    },
    set(key, value) {
      localStorage.setItem(`nwh_${key}`, JSON.stringify(value));
    },
    remove(key) {
      localStorage.removeItem(`nwh_${key}`);
    }
  },

  // Render markdown-like text to HTML
  renderContent(text) {
    if (!text) return '';
    return text
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/^# (.+)$/gm, '<h1>$1</h1>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/^- (.+)$/gm, '<li>$1</li>')
      .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>')
      .replace(/^(?!<[hulo])/gm, '<p>')
      .replace(/<p><\/p>/g, '')
      .replace(/<p>(<[hulo])/g, '$1')
      .replace(/(<\/[hulo][^>]*>)<\/p>/g, '$1');
  }
};
