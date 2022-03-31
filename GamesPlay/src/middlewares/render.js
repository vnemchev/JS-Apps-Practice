import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { logout } from '../api/user.js';

const header = document.getElementById('nav');
const root = document.getElementById('main-content');

function ctxRender(content) {
    render(content, root);
}

export function addRender(ctx, next) {
    render(nav(ctx.user, onLogout), header);
    ctx.render = ctxRender;

    function onLogout() {
        logout();
        ctx.page.redirect('/');
    }
    next();
}

const nav = (user, onLogout) => html`
    <h1><a class="home" href="/">GamesPlay</a></h1>
    <nav>
        <a href="/catalog">All games</a>
        ${user
            ? html`
                  <div id="user">
                      <a href="/create">Create Game</a>
                      <a @click=${onLogout} href="javascript:void(0)">Logout</a>
                  </div>
              `
            : html`
                  <div id="guest">
                      <a href="/login">Login</a>
                      <a href="/register">Register</a>
                  </div>
              `}
    </nav>
`;
