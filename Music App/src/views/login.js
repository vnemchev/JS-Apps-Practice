import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/user.js';

const loginTemplate = onSubmit => html`
    <section id="loginPage">
        <form @submit=${onSubmit}>
            <fieldset>
                <legend>Login</legend>

                <label for="email" class="vhide">Email</label>
                <input id="email" class="email" name="email" type="text" placeholder="Email" />

                <label for="password" class="vhide">Password</label>
                <input id="password" class="password" name="password" type="password" placeholder="Password" />

                <button type="submit" class="login">Login</button>

                <p class="field">
                    <span>If you don't have profile click <a href="/signup">here</a></span>
                </p>
            </fieldset>
        </form>
    </section>
`;

export function loginView(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);

        const email = data.get('email');
        const password = data.get('password');

        if (email == '' || password == '') {
            return alert('All fields are required!');
        }

        await login(email, password);

        e.target.reset();
        ctx.page.redirect('/');
    }
}
