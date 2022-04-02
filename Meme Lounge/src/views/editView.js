import { html } from '../../node_modules/lit-html/lit-html.js';
import * as memeService from '../api/memes.js';

const editTemplate = (meme, onSubmit) => html`
    <section id="edit-meme">
        <form @submit=${onSubmit} id="edit-form">
            <h1>Edit Meme</h1>
            <div class="container">
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title} />
                <label for="description">Description</label>
                <textarea
                    id="description"
                    placeholder="Enter Description"
                    name="description"
                    .value=${meme.description}
                >
                </textarea>
                <label for="imageUrl">Image Url</label>
                <input
                    id="imageUrl"
                    type="text"
                    placeholder="Enter Meme ImageUrl"
                    name="imageUrl"
                    .value=${meme.imageUrl}
                />
                <input type="submit" class="registerbtn button" value="Edit Meme" />
            </div>
        </form>
    </section>
`;

export async function editView(ctx) {
    const memeId = ctx.params.id;
    try {
        const meme = await memeService.getOne(memeId);
        ctx.render(editTemplate(meme, onSubmit));
    } catch (error) {
        ctx.renderError(error.message);
    }

    async function onSubmit(e) {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));

        if (Object.values(formData).some(x => x == '')) {
            ctx.renderError('All fields are required!');
            return;
        }

        try {
            await memeService.edit(memeId, {
                title: formData.title,
                description: formData.description,
                imageUrl: formData.imageUrl,
            });

            e.target.reset();
            ctx.page.redirect(`/details/${memeId}`);
        } catch (error) {
            ctx.renderError(error.message);
        }
    }
}
