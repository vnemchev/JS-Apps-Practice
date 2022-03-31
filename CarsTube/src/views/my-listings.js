import { myListingsTemplate } from '../templates/mylistings.js';

import * as carService from '../api/cars.js';

export async function myListingsView(ctx) {
    const matches = await carService.getOwn(ctx.user._id);

    ctx.render(myListingsTemplate(matches));
}
