import * as api from '../api/user.js';
import { registerTemplate } from '../templates/forms.js';

export function registerView(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target));

        console.log(data);
        if (data.username == '' || data.password == '') {
            return alert('All fields required!');
        }
        if (data.password != data.repeatPass) {
            return alert('Passwords must match!');
        }

        await api.register(data.username, data.password);

        e.target.reset();
        ctx.page.redirect('/listings');
    }
}
