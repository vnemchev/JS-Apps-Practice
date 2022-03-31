import page from '../node_modules/page/page.mjs';

import { addRender } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';

import { dashboardView } from './views/dashboardView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { myBooksView } from './views/myBooksView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { logout } from './api/user.js';

page(addSession);
page(addRender);

page('/', dashboardView);
page('/login', loginView);
page('/register', registerView);
page('/mybooks', myBooksView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/logout', onLogout);

page.start();

function onLogout() {
    logout();
    page.redirect('/');
}
