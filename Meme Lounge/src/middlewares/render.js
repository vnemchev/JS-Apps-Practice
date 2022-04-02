import { html, render } from '../../node_modules/lit-html/lit-html.js';

const navTemplate = user => html`
    <nav>
        <a href="/catalog">All Memes</a>
        ${user
            ? html` <div class="user">
                  <a href="/create">Create Meme</a>
                  <div class="profile">
                      <span>Welcome, ${user.email}</span>
                      <a href="/myprofile">My Profile</a>
                      <a href="/logout">Logout</a>
                  </div>
              </div>`
            : html` <div class="guest">
                  <div class="profile">
                      <a href="/login">Login</a>
                      <a href="/register">Register</a>
                  </div>
                  <a class="active" href="/">Home Page</a>
              </div>`}
    </nav>
`;

const errorTemplate = error => html`
    <div id="errorBox" class="notification">
        <span>${error}</span>
    </div>
`;

const notifications = document.getElementById('notifications');
const header = document.getElementById('navhead');
const root = document.getElementById('root');

export function renderContent(ctx, next) {
    render(navTemplate(ctx.user), header);
    ctx.render = ctxRender;
    ctx.renderError = renderError;
    next();
}

function ctxRender(content) {
    render(content, root);
}

function renderError(error) {
    notifications.style.display = 'block';
    render(errorTemplate(error), notifications);
}
