import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { search } from '../api/albums.js';
import { albumCard } from '../templates/album.js';

const searchTemplate = (onSearch, matches, user) => html`
    <section id="searchPage">
        <h1>Search by Name</h1>

        <div class="search">
            <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name" />
            <button class="button-list" type="submit" @click=${onSearch}>Search</button>
        </div>

        <h2>Results:</h2>

        ${matches.length > 0 ? matches.map(a => albumCard(a, user)) : html`<p class="no-result">No result.</p>`}
    </section>
`;

export function searchView(ctx) {
    ctx.render(searchTemplate(onSearch, nothing, ctx.user));

    async function onSearch(e) {
        const inputText = e.target.parentNode.querySelector('#search-input').value;

        if (inputText == '') {
            return alert('Empty input.');
        }
        const matches = await search(inputText);

        ctx.render(searchTemplate(onSearch, matches, ctx.user));
    }
}
