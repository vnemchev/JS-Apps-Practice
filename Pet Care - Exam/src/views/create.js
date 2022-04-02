import * as form from '../templates/forms.js';
import * as petService from '../api/pets.js';

export function createView(ctx) {
    ctx.render(form.create(onCreate));

    async function onCreate(e) {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target));

        if (Object.values(data).some(x => x == '')) {
            return alert('All fields are needed!');
        }

        await petService.create({
            name: data.name,
            breed: data.breed,
            age: data.age,
            weight: data.weight,
            image: data.image,
        });

        e.target.reset();
        ctx.page.redirect('/');
    }
}
