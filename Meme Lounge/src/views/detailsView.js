import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as memeService from '../api/memes.js';

const detailsTemplate = (meme, onDelete) => html` <section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${meme.imageUrl} />
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>

            <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
            ${meme.isOwner
                ? html` <a class="button warning" href="/edit/${meme._id}">Edit</a>
                      <button @click=${onDelete} class="button danger" href="javascript:void(0)">Delete</button>`
                : nothing}
        </div>
    </div>
</section>`;

export async function detailsView(ctx) {
    const memeId = ctx.params.id;

    try {
        const meme = await memeService.getOne(memeId);
        if (ctx.user) {
            const isOwner = ctx.user._id == meme._ownerId;
            meme.isOwner = isOwner;
        }

        ctx.render(detailsTemplate(meme, onDelete));
    } catch (error) {
        ctx.renderError(error.message);
    }

    async function onDelete() {
        const choice = confirm('Do you want to delete this meme?');

        if (choice) {
            try {
                await memeService.remove(memeId);
                ctx.page.redirect('/catalog');
            } catch (error) {
                ctx.renderError(error.message);
            }
        }
    }
}
