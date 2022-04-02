import { detailsTemplate } from '../templates/details.js';
import * as petService from '../api/pets.js';

export async function detailsView(ctx) {
    const petId = ctx.params.id;
    const pet = await petService.getOne(petId);

    if (ctx.user) {
        pet.hasUser = true;
        pet.isOwner = pet._ownerId == ctx.user._id;
        pet.hasDonated = await petService.hasDonated(petId, ctx.user._id);
    }

    pet.donations = (await petService.getDonations(petId)) * 100;

    ctx.render(detailsTemplate(pet, onDelete, onDonate));

    async function onDelete() {
        const choice = confirm(`Are sure you want to delete ${pet.name}?`);

        if (choice) {
            await petService.remove(petId);
            ctx.page.redirect('/');
        }
    }

    async function onDonate() {
        await petService.donate(petId);

        ctx.page.redirect(`/details/${petId}`);
    }
}
