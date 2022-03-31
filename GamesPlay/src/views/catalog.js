import { catalogTemplate } from '../templates/catalog.js';
import * as gameService from '../api/games.js';

export async function catalogView(ctx) {
    const games = await gameService.getAll();

    ctx.render(catalogTemplate(games));
}
