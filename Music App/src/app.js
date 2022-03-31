import page from '../node_modules/page/page.mjs';

import { addSession } from './middlewares/auth.js';
import { addRender } from './middlewares/render.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { searchView } from './views/search.js';

page(addSession);
page(addRender);

page('/', homeView);
page('/catalog', catalogView);
page('/login', loginView);
page('/signup', registerView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/search', searchView);

page.start();
