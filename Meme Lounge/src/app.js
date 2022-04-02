import page from '../node_modules/page/page.mjs';
import { logout } from './api/user.js';

import { renderContent } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';

import { catalogView } from './views/catalogView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { profileView } from './views/profileView.js';
import { registerView } from './views/registerView.js';

page(addSession);
page(renderContent);

page('/', homeView);
page('/catalog', catalogView);
page('/login', loginView);
page('/register', registerView);
page('/logout', onLogout);
page('/create', createView);
page('/myprofile', profileView);
page('/details/:id', detailsView);
page('/edit/:id', editView);

page.start();

async function onLogout() {
    logout();
    page.redirect('/');
}
