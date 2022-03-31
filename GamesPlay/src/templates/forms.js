import { html } from '../../node_modules/lit-html/lit-html.js';

export const login = onSubmit => html`
    <section id="login-page" class="auth">
        <form @submit=${onSubmit} id="login">
            <div class="container">
                <div class="brand-logo"></div>
                <h1>Login</h1>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

                <label for="login-pass">Password:</label>
                <input type="password" id="login-password" name="password" />
                <input type="submit" class="btn submit" value="Login" />
                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </div>
        </form>
    </section>
`;

export const register = onSubmit => html`
    <section id="register-page" class="content auth">
        <form @submit=${onSubmit} id="register">
            <div class="container">
                <div class="brand-logo"></div>
                <h1>Register</h1>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="maria@email.com" />

                <label for="pass">Password:</label>
                <input type="password" name="password" id="register-password" />

                <label for="con-pass">Confirm Password:</label>
                <input type="password" name="confirm-password" id="confirm-password" />

                <input class="btn submit" type="submit" value="Register" />

                <p class="field">
                    <span>If you already have profile click <a href="/login">here</a></span>
                </p>
            </div>
        </form>
    </section>
`;

export const create = onSubmit => html`
    <section id="create-page" class="auth">
        <form @submit=${onSubmit} id="create">
            <div class="container">
                <h1>Create Game</h1>
                <label for="leg-title">Legendary title:</label>
                <input type="text" id="title" name="title" placeholder="Enter game title..." />

                <label for="category">Category:</label>
                <input type="text" id="category" name="category" placeholder="Enter game category..." />

                <label for="levels">MaxLevel:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                <label for="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                <label for="summary">Summary:</label>
                <textarea name="summary" id="summary"></textarea>
                <input class="btn submit" type="submit" value="Create Game" />
            </div>
        </form>
    </section>
`;

export const edit = (onSubmit, game) => html`
    <section id="edit-page" class="auth">
        <form @submit=${onSubmit} id="edit">
            <div class="container">
                <h1>Edit Game</h1>
                <label for="leg-title">Legendary title:</label>
                <input type="text" id="title" name="title" .value=${game.title} />

                <label for="category">Category:</label>
                <input type="text" id="category" name="category" .value=${game.category} />

                <label for="levels">MaxLevel:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${game.maxLevel} />

                <label for="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" .value=${game.imageUrl} />

                <label for="summary">Summary:</label>
                <textarea name="summary" id="summary" .value=${game.summary}></textarea>
                <input class="btn submit" type="submit" value="Edit Game" />
            </div>
        </form>
    </section>
`;
