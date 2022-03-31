import { html } from '../../node_modules/lit-html/lit-html.js';
import { listingTemplate } from './listing.js';

export const searchByYearTemplate = (onSearch, matches) => html`
    <section id="search-cars">
        <h1>Filter by year</h1>

        <div class="container">
            <input id="search-input" type="text" name="search" placeholder="Enter desired production year" />
            <button @click=${onSearch} class="button-list">Search</button>
        </div>

        <h2>Results:</h2>
        <div class="listings">
            ${matches.length > 0 ? matches.map(listingTemplate) : html` <p class="no-cars">No results.</p> `}
        </div>
    </section>
`;
