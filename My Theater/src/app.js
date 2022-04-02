import page from '../node_modules/page/page.mjs';

import { addSession } from './middlewares/session.js';
import { renderContent } from './middlewares/render.js';

import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { createView } from './views/createView.js';
import { profileView } from './views/profileView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';

page(addSession);
page(renderContent);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/profile', profileView);
page('/details/:id', detailsView);
page('/edit/:id', editView);

page.start();
