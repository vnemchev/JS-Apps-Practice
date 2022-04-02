import { html } from '../../node_modules/lit-html/lit-html.js';

export const login = onLogin => html`
    <section id="loginPage">
        <form @submit=${onLogin} class="loginForm">
            <img src="./images/logo.png" alt="logo" />
            <h2>Login</h2>

            <div>
                <label for="email">Email:</label>
                <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="" />
            </div>

            <div>
                <label for="password">Password:</label>
                <input id="password" name="password" type="password" placeholder="********" value="" />
            </div>

            <button class="btn" type="submit">Login</button>

            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </form>
    </section>
`;

export const register = onRegister => html`
    <section id="registerPage">
        <form @submit=${onRegister} class="registerForm">
            <img src="./images/logo.png" alt="logo" />
            <h2>Register</h2>
            <div class="on-dark">
                <label for="email">Email:</label>
                <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="" />
            </div>

            <div class="on-dark">
                <label for="password">Password:</label>
                <input id="password" name="password" type="password" placeholder="********" value="" />
            </div>

            <div class="on-dark">
                <label for="repeatPassword">Repeat Password:</label>
                <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="" />
            </div>

            <button class="btn" type="submit">Register</button>

            <p class="field">
                <span>If you have profile click <a href="/login">here</a></span>
            </p>
        </form>
    </section>
`;

export const create = onCreate => html`
    <section id="createPage">
        <form @submit=${onCreate} class="createForm">
            <img src="./images/cat-create.jpg" />
            <div>
                <h2>Create PetPal</h2>
                <div class="name">
                    <label for="name">Name:</label>
                    <input name="name" id="name" type="text" placeholder="Max" />
                </div>
                <div class="breed">
                    <label for="breed">Breed:</label>
                    <input name="breed" id="breed" type="text" placeholder="Shiba Inu" />
                </div>
                <div class="Age">
                    <label for="age">Age:</label>
                    <input name="age" id="age" type="text" placeholder="2 years" />
                </div>
                <div class="weight">
                    <label for="weight">Weight:</label>
                    <input name="weight" id="weight" type="text" placeholder="5kg" />
                </div>
                <div class="image">
                    <label for="image">Image:</label>
                    <input name="image" id="image" type="text" placeholder="./image/dog.jpeg" />
                </div>
                <button class="btn" type="submit">Create Pet</button>
            </div>
        </form>
    </section>
`;

export const edit = (pet, onEdit) => html`
    <section id="editPage">
        <form @submit=${onEdit} class="editForm">
            <img src=${pet.image} />
            <div>
                <h2>Edit PetPal</h2>
                <div class="name">
                    <label for="name">Name:</label>
                    <input name="name" id="name" type="text" .value=${pet.name} />
                </div>
                <div class="breed">
                    <label for="breed">Breed:</label>
                    <input name="breed" id="breed" type="text" .value=${pet.breed} />
                </div>
                <div class="Age">
                    <label for="age">Age:</label>
                    <input name="age" id="age" type="text" .value=${pet.age} />
                </div>
                <div class="weight">
                    <label for="weight">Weight:</label>
                    <input name="weight" id="weight" type="text" .value=${pet.weight} />
                </div>
                <div class="image">
                    <label for="image">Image:</label>
                    <input name="image" id="image" type="text" .value=${pet.image} />
                </div>
                <button class="btn" type="submit">Edit Pet</button>
            </div>
        </form>
    </section>
`;
