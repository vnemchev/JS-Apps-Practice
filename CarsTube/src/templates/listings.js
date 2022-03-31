import { html } from '../../node_modules/lit-html/lit-html.js';
import { listingTemplate } from './listing.js';

export const listingsTemplate = cars => html`
    <section id="car-listings">
        <h1>Car Listings</h1>
        <div class="listings">
            ${cars.length > 0 ? cars.map(listingTemplate) : html` <p class="no-cars">No cars in database.</p> `}
        </div>
    </section>
`;

