import { html } from '../../node_modules/lit-html/lit-html.js';
import { logout } from '../api/user.js';
import page from '../../node_modules/page/page.mjs';

export const nav = user => html`
    <nav>
        <img src="../../images/headphones.png" />
        <a href="/">Home</a>
        <ul>
            <li><a href="/catalog">Catalog</a></li>
            <li><a href="/search">Search</a></li>
            ${user
                ? html`<li><a href="/create">Create Album</a></li>
                      <li><a href="javascript:void(0)" @click=${onLogout}>Logout</a></li>`
                : html`<li><a href="/login">Login</a></li>
                      <li><a href="/signup">Register</a></li>`}
        </ul>
    </nav>
`;

function onLogout() {
    logout();
    page.redirect('/');
}
