import * as carService from '../api/cars.js';
import { createTemplate } from '../templates/forms.js';

export function createView(ctx) {
    if (ctx.user) {
        ctx.render(createTemplate(onSubmit));
    }

    async function onSubmit(e) {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target));

        data.year = Number(data.year);
        data.price = Number(data.price);

        if (Object.values(data).some(x => x == '')) {
            return alert('All fields required!');
        }
        if (Number(data.year) < 0 || Number(data.price) < 0) {
            return alert('Year and price must be positive!');
        }

        await carService.create({
            brand: data.brand,
            model: data.model,
            description: data.description,
            year: data.year,
            imageUrl: data.imageUrl,
            price: data.price,
        });

        e.target.reset();
        ctx.page.redirect('/listings');
    }
}
