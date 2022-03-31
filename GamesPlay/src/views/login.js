import { login } from '../api/user.js';
import * as form from '../templates/forms.js';

export function loginView(ctx) {
    ctx.render(form.login(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);
        const email = data.get('email');
        const password = data.get('password');

        if (!email || !password) {
            return alert('Both fields needed!');
        }

        await login(email, password);

        e.target.reset();
        ctx.page.redirect('/');
    }
}
