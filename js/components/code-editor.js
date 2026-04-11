// Neo-WAHHa — Interactive Code Editor Component
const CodeEditor = {
  create(containerId, initialCode = '', options = {}) {
    const container = typeof containerId === 'string' ? Utils.$(containerId) : containerId;
    if (!container) return null;

    const editorId = Utils.genId();
    const height = options.height || '250px';

    container.innerHTML = `
      <div class="code-editor-container" id="editor-${editorId}">
        <div class="code-editor-header">
          <div class="code-editor-dots">
            <span></span><span></span><span></span>
          </div>
          <span style="color: var(--text-muted); font-size: var(--fs-sm);">محرر الأكواد 💻</span>
        </div>
        <textarea class="code-editor-textarea" id="textarea-${editorId}" 
          style="min-height: ${height}" 
          spellcheck="false" 
          placeholder="اكتب الكود هنا...">${CodeEditor.escapeHtml(initialCode)}</textarea>
        <div class="code-editor-actions">
          <button class="btn btn-primary btn-sm" id="run-${editorId}">▶️ شغّل الكود</button>
          <button class="btn btn-secondary btn-sm" id="reset-${editorId}">🔄 إعادة</button>
          ${options.checkBtn ? `<button class="btn btn-success btn-sm" id="check-${editorId}">✅ تحقق</button>` : ''}
        </div>
        <div class="code-preview" id="preview-${editorId}">
          <div class="code-preview-header">👁️ النتيجة</div>
          <iframe id="iframe-${editorId}"></iframe>
        </div>
        ${options.checkBtn ? `<div id="feedback-${editorId}" class="quiz-feedback" style="display:none;"></div>` : ''}
      </div>
    `;

    const textarea = Utils.$(`textarea-${editorId}`);
    const iframe = Utils.$(`iframe-${editorId}`);
    const runBtn = Utils.$(`run-${editorId}`);
    const resetBtn = Utils.$(`reset-${editorId}`);

    // Tab key support
    textarea.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        textarea.value = textarea.value.substring(0, start) + '  ' + textarea.value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      }
    });

    // Run code — uses srcdoc for maximum compatibility (works on file:// too)
    const runCode = () => {
      const code = textarea.value;
      iframe.srcdoc = `<html dir="rtl" lang="ar"><head><style>body{font-family:'Cairo',sans-serif;direction:rtl;text-align:right;}</style></head><body>${code}</body></html>`;

      // Auto-resize iframe after content loads
      iframe.onload = () => {
        try {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          const h = doc.body ? doc.body.scrollHeight : 200;
          iframe.style.height = Math.max(h + 30, 150) + 'px';
        } catch(e) {
          iframe.style.height = '200px';
        }
      };
    };

    runBtn.addEventListener('click', runCode);
    resetBtn.addEventListener('click', () => {
      textarea.value = initialCode;
      runCode();
    });

    // Check button
    if (options.checkBtn && options.onCheck) {
      const checkBtn = Utils.$(`check-${editorId}`);
      const feedbackEl = Utils.$(`feedback-${editorId}`);
      checkBtn.addEventListener('click', () => {
        const result = options.onCheck(textarea.value);
        feedbackEl.style.display = 'block';
        feedbackEl.style.background = result.pass ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)';
        feedbackEl.style.border = `1px solid ${result.pass ? 'var(--accent-green)' : 'var(--accent-red)'}`;
        feedbackEl.style.color = result.pass ? 'var(--neon-green)' : 'var(--accent-red)';
        feedbackEl.textContent = result.message;
      });
    }

    // Initial run
    if (initialCode) setTimeout(runCode, 300);

    return { textarea, iframe, runCode, editorId };
  },

  escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
};
