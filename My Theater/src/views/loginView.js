import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/user.js';

const loginTemplate = onLogin => html`
    <section id="loginaPage">
        <form @submit=${onLogin} class="loginForm">
            <h2>Login</h2>
            <div>
                <label for="email">Email:</label>
                <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="" />
            </div>
            <div>
                <label for="password">Password:</label>
                <input id="password" name="password" type="password" placeholder="********" value="" />
            </div>

            <button class="btn" type="submit">Login</button>

            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </form>
    </section>
`;

export function loginView(ctx) {
    ctx.render(loginTemplate(onLogin));

    async function onLogin(e) {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));

        if (formData.email == '' || formData.password == '') {
            return alert('Both fields must be filled!');
        }

        await login(formData.email, formData.password);

        e.target.reset();
        ctx.page.redirect('/');
    }
}
