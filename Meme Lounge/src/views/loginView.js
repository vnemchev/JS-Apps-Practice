import { html } from '../../node_modules/lit-html/lit-html.js';
import * as userService from '../api/user.js';

const loginTemplate = onSubmit => html`
    <section id="login">
        <form @submit=${onSubmit} id="login-form">
            <div class="container">
                <h1>Login</h1>
                <label for="email">Email</label>
                <input id="email" placeholder="Enter Email" name="email" type="text" />
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password" />
                <input type="submit" class="registerbtn button" value="Login" />
                <div class="container signin">
                    <p>Dont have an account?<a href="/register">Sign up</a>.</p>
                </div>
            </div>
        </form>
    </section>
`;

export function loginView(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));

        if (formData.email == '' || formData.password == '') {
            ctx.renderError('All fields are required!');
            return;
        }

        try {
            await userService.login(formData.email, formData.password);
            e.target.reset();
            ctx.page.redirect('/catalog');
        } catch (error) {
            ctx.renderError(error.message);
        }
    }
}
