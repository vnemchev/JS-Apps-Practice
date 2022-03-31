import { html } from '../../node_modules/lit-html/lit-html.js';
import { listingTemplate } from './listing.js';

export const myListingsTemplate = matches => html`
    <section id="my-listings">
        <h1>My car listings</h1>
        <div class="listings">
            ${matches.length > 0
                ? matches.map(listingTemplate)
                : html` <p class="no-cars">You haven't listed any cars yet.</p> `}
        </div>
    </section>
`;
