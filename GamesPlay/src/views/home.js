import { homeTemplate } from '../templates/home.js';
import * as gameService from '../api/games.js';

export async function homeView(ctx) {
    const games = await gameService.getRecent();

    ctx.render(homeTemplate(games));
}
