import { homeTemplate } from '../templates/home.js';

export function homeView(ctx) {
    ctx.render(homeTemplate());
}
