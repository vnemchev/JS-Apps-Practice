import page from '../node_modules/page/page.mjs';

import { addSession } from './middlewares/session.js';
import { addRender } from './middlewares/render.js';

import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { createView } from './views/create.js';
import { dashboardView } from './views/dashboard.js';
import { editView } from './views/edit.js';
import { detailsView } from './views/details.js';

page(addSession);
page(addRender);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/dashboard', dashboardView);
page('/edit/:id', editView);
page('/details/:id', detailsView);

page.start();
