import { html } from '../../node_modules/lit-html/lit-html.js';
import * as userService from '../api/user.js';

const registerTemplate = onSubmit => html`
    <section id="register">
        <form @submit=${onSubmit} id="register-form">
            <div class="container">
                <h1>Register</h1>
                <label for="username">Username</label>
                <input id="username" type="text" placeholder="Enter Username" name="username" />
                <label for="email">Email</label>
                <input id="email" type="text" placeholder="Enter Email" name="email" />
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password" />
                <label for="repeatPass">Repeat Password</label>
                <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass" />
                <div class="gender">
                    <input type="radio" name="gender" id="female" value="female" />
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="male" value="male" checked />
                    <label for="male">Male</label>
                </div>
                <input type="submit" class="registerbtn button" value="Register" />
                <div class="container signin">
                    <p>Already have an account?<a href="/login">Sign in</a>.</p>
                </div>
            </div>
        </form>
    </section>
`;

export function registerView(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));

        if (Object.values(formData).some(x => x == '')) {
            ctx.renderError('All fields are required!');
            return;
        }
        if (formData.password !== formData.repeatPass) {
            ctx.renderError('Passwords must match!');
        }

        try {
            await userService.register(formData.username, formData.email, formData.password, formData.gender);
            e.target.reset();
            ctx.page.redirect('/catalog');
        } catch (error) {
            ctx.renderError(error.message);
        }
    }
}
