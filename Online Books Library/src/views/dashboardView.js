import { html } from '../../node_modules/lit-html/lit-html.js';
import * as bookService from '../api/books.js';

const dashboardTemplate = books => html`
    <section id="dashboard-page" class="dashboard">
        <h1>Dashboard</h1>
        ${books.length > 0 ? booksList(books) : html`<p class="no-books">No books in database!</p>`}
    </section>
`;

const booksList = books => html`
    <ul class="other-books-list">
        ${books.map(bookCard)}
    </ul>
`;

const bookCard = book => html`
    <li class="otherBooks">
        <h3>${book.title}</h3>
        <p>Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl} /></p>
        <a class="button" href="/details/${book._id}">Details</a>
    </li>
`;

export async function dashboardView(ctx) {
    const books = await bookService.getAll();

    ctx.render(dashboardTemplate(books));
}
