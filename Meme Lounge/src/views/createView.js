import { html } from '../../node_modules/lit-html/lit-html.js';
import * as memeService from '../api/memes.js';

const createTemplate = onSubmit => html`
    <section id="create-meme">
        <form @submit=${onSubmit} id="create-form">
            <div class="container">
                <h1>Create Meme</h1>
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title" />
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                <label for="imageUrl">Meme Image</label>
                <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl" />
                <input type="submit" class="registerbtn button" value="Create Meme" />
            </div>
        </form>
    </section>
`;

export function createView(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));

        if (Object.values(formData).some(x => x == '')) {
            ctx.renderError('All fields are required!');
            return;
        }

        try {
            await memeService.create({
                title: formData.title,
                description: formData.description,
                imageUrl: formData.imageUrl,
            });

            e.target.reset();
            ctx.page.redirect('/catalog');
        } catch (error) {
            ctx.renderError(error.message);
        }
    }
}
