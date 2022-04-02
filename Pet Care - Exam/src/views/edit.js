import * as form from '../templates/forms.js';
import * as petService from '../api/pets.js';

export async function editView(ctx) {
    const petId = ctx.params.id;
    const pet = await petService.getOne(petId);

    ctx.render(form.edit(pet, onEdit));

    async function onEdit(e) {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target));

        if (Object.values(data).some(x => x == '')) {
            return alert('All fields are needed!');
        }

        await petService.edit(petId, {
            name: data.name,
            breed: data.breed,
            age: data.age,
            weight: data.weight,
            image: data.image,
        });

        e.target.reset();
        ctx.page.redirect(`details/${petId}`);
    }
}
