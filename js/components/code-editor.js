// Neo-WAHHa — Interactive Code Editor Component
const CodeEditor = {
  // Real external images for CSS demos
  DEMO_IMAGES: {
    portrait: 'https://i.pravatar.cc/200?img=12',
    nature: 'https://picsum.photos/id/15/600/400',
    small: 'https://i.pravatar.cc/100?img=32',
    banner: 'https://picsum.photos/id/28/800/300',
    thumbnail: 'https://i.pravatar.cc/80?img=5'
  },

  create(containerId, initialCode = '', options = {}) {
    const container = typeof containerId === 'string' ? Utils.$(containerId) : containerId;
    if (!container) return null;

    const editorId = Utils.genId();
    const height = options.height || '250px';
    const lang = options.language || 'html'; // 'html', 'css', 'js'

    // Language badge info
    const langLabels = {
      html: { label: 'HTML', icon: '\u{1F310}', color: '#e34f26' },
      css:  { label: 'CSS',  icon: '\u{1F3A8}', color: '#3b82f6' },
      js:   { label: 'JavaScript', icon: '\u26A1', color: '#eab308' }
    };
    const langInfo = langLabels[lang] || langLabels.html;

    container.innerHTML = `
      <div class="code-editor-container" id="editor-${editorId}">
        <div class="code-editor-header">
          <div class="code-editor-dots">
            <span></span><span></span><span></span>
          </div>
          <span style="color: var(--text-muted); font-size: var(--fs-sm);">
            محرر الأكواد ${langInfo.icon}
            <span class="code-lang-badge" style="background: ${langInfo.color}; color: white; padding: 2px 8px; border-radius: 4px; font-size: 11px; margin-right: 6px;">${langInfo.label}</span>
          </span>
        </div>
        <textarea class="code-editor-textarea" id="textarea-${editorId}" 
          style="min-height: ${height}; direction: ltr; text-align: left;" 
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

    // Run code — behavior depends on language
    const runCode = () => {
      const code = textarea.value;
      if (lang === 'css') {
        iframe.srcdoc = CodeEditor.buildCssPreview(code);
      } else if (lang === 'js') {
        iframe.srcdoc = CodeEditor.buildJsPreview(code);
      } else {
        iframe.srcdoc = '<html dir="rtl" lang="ar"><head><style>body{font-family:\'Cairo\',sans-serif;direction:rtl;text-align:right;}</style></head><body>' + code + '</body></html>';
      }
      // Auto-resize iframe
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
        feedbackEl.style.border = '1px solid ' + (result.pass ? 'var(--accent-green)' : 'var(--accent-red)');
        feedbackEl.style.color = result.pass ? 'var(--neon-green)' : 'var(--accent-red)';
        feedbackEl.textContent = result.message;
      });
    }

    // Initial run
    if (initialCode) setTimeout(runCode, 300);

    return { textarea, iframe, runCode, editorId };
  },

  // ─── CSS Preview ─────────────────────────────────────────────
  buildCssPreview(cssCode) {
    var demoHtml = CodeEditor.generateCssDemoHtml(cssCode);
    return '<!DOCTYPE html>' +
      '<html dir="rtl" lang="ar"><head><meta charset="UTF-8">' +
      '<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap" rel="stylesheet">' +
      '<style>' +
      '*, *::before, *::after { box-sizing: border-box; }' +
      'body { font-family: \'Cairo\', sans-serif; direction: rtl; text-align: right; padding: 20px; margin: 0; background: #fafafa; }' +
      'img { display: block; max-width: 100%; }' +
      cssCode +
      '</style></head><body>' +
      demoHtml +
      '</body></html>';
  },

  generateCssDemoHtml(cssCode) {
    var html = '';
    var imgs = CodeEditor.DEMO_IMAGES;

    // Detect which HTML elements the CSS targets
    if (/\bh1\b/i.test(cssCode)) {
      html += '<h1>\u0639\u0646\u0648\u0627\u0646 \u0645\u0648\u0642\u0639\u064A \u0627\u0644\u0634\u062E\u0635\u064A</h1>';
    }
    if (/\bh2\b\s*[{,:]/.test(cssCode)) {
      html += '<h2>\u0639\u0646\u0648\u0627\u0646 \u0641\u0631\u0639\u064A</h2>';
    }
    if (/\bh3\b\s*[{,:]/.test(cssCode)) {
      html += '<h3>\u0639\u0646\u0648\u0627\u0646 \u0635\u063A\u064A\u0631</h3>';
    }
    if (/\bp\b\s*[{,:]/.test(cssCode)) {
      html += '<p>\u0645\u0631\u062D\u0628\u0627\u064B! \u0623\u0646\u0627 \u0623\u062A\u0639\u0644\u0645 \u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 CSS.</p>';
      html += '<p>\u0647\u0630\u0647 \u0641\u0642\u0631\u0629 \u062B\u0627\u0646\u064A\u0629 \u0644\u062A\u0631\u0649 \u062A\u0623\u062B\u064A\u0631 \u0627\u0644\u062A\u0646\u0633\u064A\u0642.</p>';
    }
    if (/\ba\b\s*[{,:]/.test(cssCode) || /\ba:hover/.test(cssCode)) {
      html += '<a href="#">\u0647\u0630\u0627 \u0631\u0627\u0628\u0637 \u062A\u062C\u0631\u064A\u0628\u064A</a> ';
    }
    if (/\bbutton\b\s*[{,:]/.test(cssCode) || /\bbutton:/.test(cssCode)) {
      html += '<button>\u0632\u0631 \u062A\u062C\u0631\u064A\u0628\u064A</button> ';
    }
    // Direct img element — place as direct img (not wrapped in div) so CSS applies directly
    if (/\bimg\b\s*[{,:]/.test(cssCode) || /\bimg\b/.test(cssCode)) {
      html += '<img src="' + imgs.portrait + '" alt="\u0635\u0648\u0631\u0629 \u062A\u062C\u0631\u064A\u0628\u064A\u0629"> ';
    }

    // Detect class selectors
    var classMatches = cssCode.match(/\.([\w-]+)\s*[{,:]/g);
    if (classMatches) {
      var seen = {};
      classMatches.forEach(function(m) {
        var cls = m.replace(/^\./, '').replace(/\s*[{,:]$/, '');
        if (seen[cls]) return;
        seen[cls] = true;
        var lc = cls.toLowerCase();

        if (lc.includes('button') || lc.includes('btn')) {
          html += '<button class="' + cls + '">\u0632\u0631 ' + cls + '</button> ';

        } else if (lc.includes('pill')) {
          html += '<button class="' + cls + '">\u0632\u0631 \u062D\u0628\u0629</button> ';

        } else if (lc === 'profile-picture' || lc === 'profile-img' || lc === 'profile-image') {
          // Profile picture — use img directly so CSS (border-radius, border) applies to the img itself
          html += '<img class="' + cls + '" src="' + imgs.portrait + '" alt="\u0635\u0648\u0631\u0629 \u0627\u0644\u0628\u0631\u0648\u0641\u0627\u064A\u0644"> ';

        } else if (lc.includes('banner')) {
          html += '<img class="' + cls + '" src="' + imgs.banner + '" alt="\u0628\u0627\u0646\u0631"> ';

        } else if (lc.includes('thumbnail') || lc === 'thumb') {
          html += '<img class="' + cls + '" src="' + imgs.thumbnail + '" alt="\u0635\u0648\u0631\u0629 \u0645\u0635\u063A\u0631\u0629"> ';

        } else if (lc.includes('img') || lc.includes('picture') || lc.includes('photo') || lc.includes('avatar')) {
          html += '<img class="' + cls + '" src="' + imgs.portrait + '" alt="' + cls + '"> ';

        } else if (lc.includes('card')) {
          html += '<div class="' + cls + '">' +
            '<h2>\u0628\u0637\u0627\u0642\u0629 \u062A\u0639\u0631\u064A\u0641\u064A\u0629</h2>' +
            '<p>\u0647\u0630\u0647 \u0628\u0637\u0627\u0642\u0629 \u062C\u0645\u064A\u0644\u0629 \u0628\u0643\u0644\u0627\u0633: ' + cls + '</p>' +
            '</div> ';

        } else if (lc.includes('name') || lc.includes('title') || lc.includes('subtitle')) {
          html += '<span class="' + cls + '">\u0646\u0635 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 .' + cls + '</span> ';

        } else {
          html += '<div class="' + cls + '">\u0639\u0646\u0635\u0631 \u0628\u0643\u0644\u0627\u0633 .' + cls + '</div> ';
        }
      });
    }

    // Fallback
    if (!html) {
      html = '<h1>\u0639\u0646\u0648\u0627\u0646 \u0645\u0648\u0642\u0639\u064A \u0627\u0644\u0634\u062E\u0635\u064A</h1>' +
        '<h2>\u062A\u0631\u062D\u064A\u0628</h2>' +
        '<p>\u0645\u0631\u062D\u0628\u0627\u064B! \u0623\u0646\u0627 \u0623\u062A\u0639\u0644\u0645 \u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 CSS.</p>' +
        '<p>\u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u064A\u064F\u0639\u0631\u0636 \u0628\u0627\u0644\u062A\u0646\u0633\u064A\u0642\u0627\u062A \u0627\u0644\u062A\u064A \u0643\u062A\u0628\u062A\u0647\u0627!</p>' +
        '<a href="#">\u0631\u0627\u0628\u0637 \u062A\u062C\u0631\u064A\u0628\u064A</a> ' +
        '<button>\u0632\u0631 \u062A\u062C\u0631\u064A\u0628\u064A</button>' +
        '<div class="my-card"><h3>\u0628\u0637\u0627\u0642\u0629</h3><p>\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0628\u0637\u0627\u0642\u0629</p></div>';
    }

    return html;
  },

  // ─── JavaScript Preview ──────────────────────────────────────
  buildJsPreview(jsCode) {
    var safeCode = jsCode.replace(/<\/script/gi, '<\\/script');

    var html = '<!DOCTYPE html><html dir="rtl" lang="ar"><head><meta charset="UTF-8">' +
      '<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">' +
      '<style>' +
      '*{box-sizing:border-box;margin:0;padding:0}' +
      'body{font-family:"Cairo",sans-serif;background:#1a1a2e;color:#e0e0e0;padding:0;margin:0;direction:ltr;text-align:left}' +
      '.console-header{background:#16213e;padding:8px 14px;font-size:12px;color:#64748b;border-bottom:1px solid #2a2a4a;display:flex;align-items:center;gap:8px;font-family:"Cairo",sans-serif;direction:rtl}' +
      '.console-header .icon{font-size:14px}' +
      '.console-header .title{color:#94a3b8;font-weight:600}' +
      '.console-output{padding:12px 16px;font-family:"Fira Code","Courier New",monospace;font-size:13px;line-height:1.8;min-height:60px;white-space:pre-wrap;word-break:break-word}' +
      '.log-line{padding:3px 0;border-bottom:1px solid rgba(255,255,255,0.04);display:flex;align-items:flex-start;gap:8px}' +
      '.log-line:last-child{border-bottom:none}' +
      '.log-line .line-num{color:#4a5568;font-size:11px;min-width:20px;text-align:right;user-select:none;padding-top:1px}' +
      '.log-line .log-content{flex:1}' +
      '.log-line.log-string{color:#a3e635}' +
      '.log-line.log-number{color:#60a5fa}' +
      '.log-line.log-boolean{color:#c084fc}' +
      '.log-line.log-object{color:#fbbf24}' +
      '.log-line.log-undefined{color:#6b7280}' +
      '.log-line.log-error{color:#ef4444;background:rgba(239,68,68,0.08);padding:4px 8px;border-radius:4px;border:1px solid rgba(239,68,68,0.2)}' +
      '.log-line.log-warn{color:#f59e0b;background:rgba(245,158,11,0.08);padding:4px 8px;border-radius:4px}' +
      '.empty-state{color:#4a5568;font-style:italic;text-align:center;padding:20px;font-family:"Cairo",sans-serif;direction:rtl}' +
      '.console-footer{background:#16213e;padding:6px 14px;font-size:11px;color:#4a5568;border-top:1px solid #2a2a4a;text-align:left;font-family:"Fira Code",monospace}' +
      '</style></head><body>' +
      '<div class="console-header"><span class="icon">\uD83D\uDDA5\uFE0F</span><span class="title">\u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 (Console)</span></div>' +
      '<div class="console-output" id="co"></div>' +
      '<div class="console-footer" id="cf"></div>' +
      '<script>' +
      '(function(){' +
      'var o=document.getElementById("co"),f=document.getElementById("cf"),n=0,st=performance.now();' +
      'function gt(v){if(v===null||v===undefined)return "undefined";if(typeof v==="string")return "string";if(typeof v==="number")return "number";if(typeof v==="boolean")return "boolean";if(typeof v==="object")return "object";return "string"}' +
      'function fv(v){if(v===null)return "null";if(v===undefined)return "undefined";if(typeof v==="string")return v;if(typeof v==="object"){try{return JSON.stringify(v,null,2)}catch(e){return String(v)}}return String(v)}' +
      'function al(a,t){n++;var tx=Array.from(a).map(fv).join(" ");var tc=t||gt(a[0]);var l=document.createElement("div");l.className="log-line log-"+tc;var ns=document.createElement("span");ns.className="line-num";ns.textContent=n;var cs=document.createElement("span");cs.className="log-content";cs.textContent=tx;l.appendChild(ns);l.appendChild(cs);o.appendChild(l)}' +
      'var ol=console.log,ow=console.warn,oe=console.error;' +
      'console.log=function(){al(arguments);ol.apply(console,arguments)};' +
      'console.warn=function(){al(arguments,"warn");ow.apply(console,arguments)};' +
      'console.error=function(){al(arguments,"error");oe.apply(console,arguments)};' +
      'try{' +
      safeCode +
      '\n}catch(err){al(["\u062E\u0637\u0623: "+err.message],"error")}' +
      'var el=(performance.now()-st).toFixed(1);' +
      'f.textContent=n+" output(s) \\u2022 "+el+"ms";' +
      'if(n===0){o.innerHTML=\'<div class="empty-state">\u0644\u0627 \u064A\u0648\u062C\u062F \u0646\u0627\u062A\u062C \\u2014 \u0627\u0633\u062A\u062E\u062F\u0645 console.log() \u0644\u0639\u0631\u0636 \u0627\u0644\u0646\u062A\u0627\u0626\u062C</div>\'}' +
      '})();' +
      '</' + 'script></body></html>';

    return html;
  },

  escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
};
