import * as form from '../templates/forms.js';
import { register } from '../api/user.js';

export function registerView(ctx) {
    ctx.render(form.register(onRegister));

    async function onRegister(e) {
        e.preventDefault();

        const data = new FormData(e.target);
        const email = data.get('email');
        const password = data.get('password');
        const repeatPassword = data.get('repeatPassword');

        if (email == '' || password == '' || repeatPassword == '') {
            return alert('Both fields are needed!');
        }
        if (password != repeatPassword) {
            return alert('Passwords must match!');
        }

        await register(email, password);

        e.target.reset();
        ctx.page.redirect('/');
    }
}
