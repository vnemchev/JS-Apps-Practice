import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { logout } from '../api/user.js';
import page from '../../node_modules/page/page.mjs';

const header = document.getElementById('header-nav');
const root = document.getElementById('site-content');

function ctxRender(content) {
    render(content, root);
}

export function addRender(ctx, next) {
    render(nav(ctx.user), header);
    ctx.render = ctxRender;
    next();
}

const nav = user => html`
    <nav>
        <a class="active" href="/">Home</a>
        <a href="/listings">All Listings</a>
        <a href="/search">By Year</a>
        ${user
            ? html` <div id="profile">
                  <a>Welcome ${user.username}</a>
                  <a href="/mylistings">My Listings</a>
                  <a href="/create">Create Listing</a>
                  <a @click=${onLogout} href="javascript:void(0)">Logout</a>
              </div>`
            : html`<div id="guest">
                  <a href="/login">Login</a>
                  <a href="/register">Register</a>
              </div>`}
    </nav>
`;

function onLogout() {
    logout();
    page.redirect('/');
}
