import * as form from '../templates/forms.js';
import { login } from '../api/user.js';

export function loginView(ctx) {
    ctx.render(form.login(onLogin));

    async function onLogin(e) {
        e.preventDefault();

        const data = new FormData(e.target);
        const email = data.get('email');
        const password = data.get('password');

        if (email == '' || password == '') {
            return alert('Both fields are needed!');
        }

        await login(email, password);

        e.target.reset();
        ctx.page.redirect('/');
    }
}
