import page from '../node_modules/page/page.mjs';

import { addSession } from './mid/session.js';
import { addRender } from './mid/render.js';

import { homeView } from './views/home.js';
import { listingsView } from './views/listings.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { searchByYearView } from './views/search-by-year.js';
import { myListingsView } from './views/my-listings.js';

page(addSession);
page(addRender);

page('/', homeView);
page('/listings', listingsView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/search', searchByYearView);
page('/mylistings', myListingsView);

page.start();
