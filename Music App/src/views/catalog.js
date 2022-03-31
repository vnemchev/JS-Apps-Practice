import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/albums.js';
import { albumCard } from '../templates/album.js';

const catalogTemplate = (albums, user) => html`
    <section id="catalogPage">
        <h1>All Albums</h1>
        ${albums.length > 0 ? albums.map(a => albumCard(a, user)) : html` <p>No Albums in Catalog!</p> `}
    </section>
`;

export async function catalogView(ctx) {
    const albums = await getAll();

    ctx.render(catalogTemplate(albums, ctx.user));
}
