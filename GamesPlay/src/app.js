import page from '../node_modules/page/page.mjs';

import { addSession } from './middlewares/session.js';
import { addRender } from './middlewares/render.js';
import { homeView } from './views/home.js';

import { registerView } from './views/register.js';
import { loginView } from './views/login.js';
// import { createView } from './views/create.js';
// import { catalogView } from './views/catalog.js';

page(addSession);
page(addRender);

page('/', homeView);
page('/login', loginView);
// page('/register', registerView);
// page('/create', createView);
// page('/catalog', catalogView);
page.start();