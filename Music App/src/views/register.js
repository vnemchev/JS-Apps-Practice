import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/user.js';

const registerTemplate = onSubmit => html`
    <section id="registerPage">
        <form @submit=${onSubmit}>
            <fieldset>
                <legend>Register</legend>

                <label for="email" class="vhide">Email</label>
                <input id="email" class="email" name="email" type="text" placeholder="Email" />

                <label for="password" class="vhide">Password</label>
                <input id="password" class="password" name="password" type="password" placeholder="Password" />

                <label for="conf-pass" class="vhide">Confirm Password:</label>
                <input
                    id="conf-pass"
                    class="conf-pass"
                    name="conf-pass"
                    type="password"
                    placeholder="Confirm Password"
                />

                <button type="submit" class="register">Register</button>

                <p class="field">
                    <span>If you already have profile click <a href="/login">here</a></span>
                </p>
            </fieldset>
        </form>
    </section>
`;

export function registerView(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target));

        if (Object.values(data).some(x => x == '')) {
            return alert('All fields are required!');
        }
        if (data.password != data['conf-pass']) {
            return alert('Passwords must match');
        }

        await register(data.email, data.password);

        e.target.reset();
        ctx.page.redirect('/');
    }
}
