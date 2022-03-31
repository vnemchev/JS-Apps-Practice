import { render } from '../../node_modules/lit-html/lit-html.js';
import { nav } from '../views/nav.js';

const header = document.getElementById('nav');
const root = document.getElementById('main-content');

function ctxRender(content) {
    render(content, root);
}

export function addRender(ctx, next) {
    render(nav(ctx.user), header);
    ctx.render = ctxRender;

    next();
}
