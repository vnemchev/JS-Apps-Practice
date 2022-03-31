import * as carService from '../api/cars.js';
import { editTemplate } from '../templates/forms.js';

export async function editView(ctx) {
    const carId = ctx.params.id;
    const car = await carService.getOne(carId);

    ctx.render(editTemplate(car, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target));

        data.year = Number(data.year);
        data.price = Number(data.price);

        if (Object.values(data).some(x => x == '')) {
            return alert('All fields required!');
        }
        if (data.year < 0 || data.price < 0) {
            return alert('Year and price must be positive!');
        }

        await carService.edit(carId, {
            brand: data.brand,
            model: data.model,
            description: data.description,
            year: data.year,
            imageUrl: data.imageUrl,
            price: data.price,
        });

        e.target.reset();
        ctx.page.redirect(`/details/${carId}`);
    }
}
