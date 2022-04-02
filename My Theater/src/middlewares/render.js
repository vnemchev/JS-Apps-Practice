import { render } from '../../node_modules/lit-html/lit-html.js';
import { navTemplate } from '../views/navView.js';

const header = document.getElementById('header');
const root = document.getElementById('content');

function renderNav(nav) {
    render(nav, header);
}

function ctxRender(content) {
    render(content, root);
}

export function renderContent(ctx, next) {
    renderNav(navTemplate(ctx.user));
    ctx.render = ctxRender;
    next();
}
