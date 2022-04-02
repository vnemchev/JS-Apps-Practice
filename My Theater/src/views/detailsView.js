import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as movieService from '../api/movies.js';

const detailsTemplate = (movie, onDelete, onLike) => html`
    <section id="detailsPage">
        <div id="detailsBox">
            <div class="detailsInfo">
                <h1>Title: ${movie.title}</h1>
                <div>
                    <img src=${movie.imageUrl} />
                </div>
            </div>

            <div class="details">
                <h3>Theater Description</h3>
                <p>${movie.description}</p>
                <h4>Date: ${movie.date}</h4>
                <h4>Author: ${movie.author}</h4>
                <div class="buttons">
                    ${movie.isOwner
                        ? html`
                              <a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
                              <a class="btn-edit" href="/edit/${movie._id}">Edit</a>
                          `
                        : nothing}
                    ${movie.canLike && !movie.hasLiked
                        ? html` <a @click=${onLike} class="btn-like" href="javascript:void(0)">Like</a> `
                        : nothing}
                </div>
                <p class="likes">Likes: ${movie.likes}</p>
            </div>
        </div>
    </section>
`;

export async function detailsView(ctx) {
    const theaterId = ctx.params.id;

    const [movie, likes, hasLiked] = await Promise.all([
        movieService.getOne(theaterId),
        movieService.getLikes(theaterId),
        movieService.hasLiked(theaterId, ctx.user._id),
    ]);

    movie.likes = likes;

    if (ctx.user) {
        movie.hasUser = true;
        movie.isOwner = movie._ownerId == ctx.user._id;
        movie.canLike = !movie.isOwner && !hasLiked;
        movie.hasLiked = hasLiked;
    }

    ctx.render(detailsTemplate(movie, onDelete, onLike));

    async function onDelete() {
        const choice = confirm(`Do you want to delete ${movie.title}?`);

        if (choice) {
            await movieService.remove(theaterId);
            ctx.page.redirect('/profile');
        }
    }

    async function onLike(e) {
        await movieService.like(movie._id);
        ctx.page.redirect(`/details/${theaterId}`);
    }
}
