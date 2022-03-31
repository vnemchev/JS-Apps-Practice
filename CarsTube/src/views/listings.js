import * as carService from '../api/cars.js';
import { listingsTemplate } from '../templates/listings.js';

export async function listingsView(ctx) {
    const cars = await carService.getAll();

    ctx.render(listingsTemplate(cars));
}
