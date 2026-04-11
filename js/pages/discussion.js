// Neo-WAHHa — Discussion Page
const DiscussionPage = {
  render() {
    Navbar.show();
    Navbar.setActive('discussion');
    const app = Utils.$('app');

    app.innerHTML = `
      <div class="page page-with-nav">
        <div class="section-header">
          <h2>💬 <span class="text-gradient">لوحة النقاش</span></h2>
          <p>تواصل مع زملائك وناقش ما تتعلمه</p>
        </div>
        <div id="chat-area"></div>
      </div>
    `;

    Chat.render(Utils.$('chat-area'));
  }
};
