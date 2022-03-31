import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as bookService from '../api/books.js';
import * as likeService from '../api/likes.js';

const detailsTemplate = (book, onDelete, onLike) => html`
    <section id="details-page" class="details">
        <div class="book-information">
            <h3>${book.title}</h3>
            <p class="type">Type: ${book.type}</p>
            <p class="img"><img src=${book.imageUrl} /></p>
            <div class="actions">
                ${book.isOwner
                    ? html`
                          <a class="button" href="/edit/${book._id}">Edit</a>
                          <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>
                      `
                    : nothing}
                ${book.canLike && !book.hasLiked
                    ? html` <a @click=${onLike} class="button" href="javascript:void(0)">Like</a> `
                    : nothing}
                <div class="likes">
                    <img class="hearts" src="/images/heart.png" />
                    <span id="total-likes">Likes: ${book.likes}</span>
                </div>
            </div>
        </div>
        <div class="book-description">
            <h3>Description:</h3>
            <p>${book.description}</p>
        </div>
    </section>
`;

export async function detailsView(ctx) {
    const bookId = ctx.params.id;

    const [book, likes, hasLiked] = await Promise.all([
        bookService.getOne(bookId),
        likeService.getTotal(bookId),
        likeService.hasLiked(bookId, ctx.user),
    ]);

    book.likes = likes;

    if (ctx.user) {
        book.hasUser = true;
        book.isOwner = ctx.user._id == book._ownerId;
        book.canLike = !book.isOwner && !hasLiked;
        book.hasLiked = hasLiked;
    }

    ctx.render(detailsTemplate(book, onDelete, onLike));

    async function onDelete() {
        const choice = confirm(`Are you sure you want to delete ${book.title}?`);

        if (choice) {
            await bookService.remove(bookId);
            ctx.page.redirect('/');
        }
    }

    async function onLike(e) {
        await likeService.add(bookId);
        ctx.page.redirect(`/details/${bookId}`);
    }
}
