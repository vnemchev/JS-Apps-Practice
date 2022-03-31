import * as form from '../templates/forms.js';
import * as gameService from '../api/games.js';

export function createView(ctx) {
    ctx.render(form.create(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target));

        if (Object.values(data).some(x => x == '')) {
            return alert('All fields needed!');
        }

        await gameService.create({
            title: data.title,
            category: data.category,
            maxLevel: data.maxLevel,
            imageUrl: data.imageUrl,
            summary: data.summary,
        });

        e.target.reset();
        ctx.page.redirect('/');
    }
}
