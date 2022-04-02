import { dashboardTemplate } from '../templates/dashboard.js';
import * as petService from '../api/pets.js';

export async function dashboardView(ctx) {
    const pets = await petService.getAll();

    ctx.render(dashboardTemplate(pets));
}
