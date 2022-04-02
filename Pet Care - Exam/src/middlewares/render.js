import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { logout } from '../api/user.js';

const header = document.getElementById('nav');
const root = document.getElementById('content');

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
    <nav>
        <section class="logo">
            <img src="./images/logo.png" alt="logo" />
        </section>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            ${user
                ? html`
                      <li><a href="/create">Create Postcard</a></li>
                      <li><a href="javascript:void(0)" @click=${onLogout}>Logout</a></li>
                  `
                : html`
                      <li><a href="/login">Login</a></li>
                      <li><a href="/register">Register</a></li>
                  `}
        </ul>
    </nav>
`;
