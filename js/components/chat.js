// Neo-WAHHa — Chat Component (Discussion Board)
const Chat = {
  render(container) {
    const user = Auth.getUser();
    const messages = Utils.store.get('chatMessages', []);

    container.innerHTML = `
      <div class="chat-container">
        <div class="chat-messages" id="chat-messages"></div>
        <div class="chat-input-area">
          <input type="text" class="input-field" id="chat-input" placeholder="اكتب رسالتك هنا..." autocomplete="off">
          <button class="btn btn-primary" id="chat-send">إرسال 📤</button>
        </div>
      </div>
    `;

    const messagesEl = Utils.$('chat-messages');
    const inputEl = Utils.$('chat-input');
    const sendBtn = Utils.$('chat-send');

    const renderMessages = () => {
      const msgs = Utils.store.get('chatMessages', []);
      if (msgs.length === 0) {
        messagesEl.innerHTML = `
          <div class="empty-state">
            <span class="empty-icon">💬</span>
            <p>لا توجد رسائل بعد. كن أول من يكتب!</p>
          </div>
        `;
        return;
      }

      messagesEl.innerHTML = msgs.map(msg => `
        <div class="chat-message ${msg.username === user.username ? 'own' : 'other'}">
          <div class="chat-message-user">${Utils.escapeHtml(msg.displayName)}</div>
          <div class="chat-message-text">${Utils.escapeHtml(msg.text)}</div>
          <div class="chat-message-time">${Utils.formatTime(msg.time)}</div>
        </div>
      `).join('');

      messagesEl.scrollTop = messagesEl.scrollHeight;
    };

    const sendMessage = () => {
      const text = inputEl.value.trim();
      if (!text) return;

      const msgs = Utils.store.get('chatMessages', []);
      msgs.push({
        id: Utils.genId(),
        username: user.username,
        displayName: user.displayName,
        text,
        time: Date.now()
      });
      Utils.store.set('chatMessages', msgs);
      inputEl.value = '';
      renderMessages();
    };

    sendBtn.addEventListener('click', sendMessage);
    inputEl.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });

    renderMessages();

    // Poll for new messages every 2 seconds
    const interval = setInterval(() => {
      if (!document.getElementById('chat-messages')) {
        clearInterval(interval);
        return;
      }
      renderMessages();
    }, 2000);
  }
};
