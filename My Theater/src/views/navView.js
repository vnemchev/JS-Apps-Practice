import page from '../../node_modules/page/page.mjs';
import { html } from '../../node_modules/lit-html/lit-html.js';
import { logout } from '../api/user.js';

export const navTemplate = user => html`
    <header id="header">
        <nav>
            <a href="/">Theater</a>
            <ul>
                ${user ? userNav(onLogout) : guestNav}
            </ul>
        </nav>
    </header>
`;

const userNav = onLogout => html`
    <li><a href="/profile">Profile</a></li>
    <li><a href="/create">Create Event</a></li>
    <li><a @click=${onLogout} href="javascript:void(0)">Logout</a></li>
`;

const guestNav = html`
    <li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>
`;

function onLogout() {
    logout();
    page.redirect('/');
}
