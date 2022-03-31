import * as carService from '../api/cars.js';
import { detailsTemplate } from '../templates/details.js';

export async function detailsView(ctx) {
    const user = ctx.user;
    const carId = ctx.params.id;
    const car = await carService.getOne(carId);

    if (user) {
        car.isOwner = user._id == car._ownerId;
        car.delete = onDelete;
    }

    ctx.render(detailsTemplate(car));

    async function onDelete() {
        const choice = confirm('Do you want to delete this entry?');

        if (choice) {
            await carService.remove(carId);
            ctx.page.redirect('/');
        }
    }
}
