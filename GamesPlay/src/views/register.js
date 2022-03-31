import { register } from '../api/user.js';
import * as form from '../templates/forms.js';

export function registerView(ctx) {
    ctx.render(form.register(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);
        const email = data.get('email');
        const password = data.get('password');
        const confPass = data.get('confirm-password');

        if (!email || !password) {
            return alert('All fields needed!');
        }
        if (confPass != password) {
            return alert('Passwords must match!');
        }

        await register(email, password);

        e.target.reset();
        ctx.page.redirect('/');
    }
}
