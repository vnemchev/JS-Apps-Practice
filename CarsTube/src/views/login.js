import * as api from '../api/user.js';
import { loginTemplate } from '../templates/forms.js';

export function loginView(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);

        const username = data.get('username');
        const password = data.get('password');

        if (username == '' || password == '') {
            return alert('All fields required!');
        }

        await api.login(username, password);

        e.target.reset();
        ctx.page.redirect('/listings');
    }
}
