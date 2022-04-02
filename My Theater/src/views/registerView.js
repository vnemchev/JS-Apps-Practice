import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/user.js';

const registerTemplate = onRegister => html`
    <section id="registerPage">
        <form @submit=${onRegister} class="registerForm">
            <h2>Register</h2>
            <div class="on-dark">
                <label for="email">Email:</label>
                <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="" />
            </div>

            <div class="on-dark">
                <label for="password">Password:</label>
                <input id="password" name="password" type="password" placeholder="********" value="" />
            </div>

            <div class="on-dark">
                <label for="repeatPassword">Repeat Password:</label>
                <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="" />
            </div>

            <button class="btn" type="submit">Register</button>

            <p class="field">
                <span>If you have profile click <a href="/login">here</a></span>
            </p>
        </form>
    </section>
`;

export function registerView(ctx) {
    ctx.render(registerTemplate(onRegister));

    async function onRegister(e) {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));

        if (Object.values(formData).some(x => x == '')) {
            return alert('All fields must be filled!');
        }

        if (formData.password != formData.repeatPassword) {
            return alert('Both passwords must match!');
        }

        await register(formData.email, formData.password);

        e.target.reset();
        ctx.page.redirect('/');
    }
}
