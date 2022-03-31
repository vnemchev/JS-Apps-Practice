import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as bookService from '../api/books.js';

const myBooksTemplate = books => html` <section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    ${books.length > 0 ? booksList(books) : html` <p class="no-books">No books in database!</p> `}
</section>`;

const booksList = books =>
    html` <ul class="my-books-list">
        ${books.map(bookCard)}
    </ul>`;

const bookCard = book => html`
    <li class="otherBooks">
        <h3>${book.title}</h3>
        <p>Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl} /></p>
        <a class="button" href="/details/${book._id}">Details</a>
    </li>
`;

export async function myBooksView(ctx) {
    const userId = ctx.user._id;
    const books = await bookService.getOwn(userId);

    ctx.render(myBooksTemplate(books));
}
