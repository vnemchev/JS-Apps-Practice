import { html } from '../../node_modules/lit-html/lit-html.js';

export const loginTemplate = onSubmit => html`
    <section id="login">
        <div class="container">
            <form @submit=${onSubmit} id="login-form" action="" method="">
                <h1>Login</h1>
                <p>Please enter your credentials.</p>
                <hr />

                <p>Username</p>
                <input placeholder="Enter Username" name="username" type="text" />

                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password" />
                <input type="submit" class="registerbtn" value="Login" />
            </form>
            <div class="signin">
                <p>Dont have an account? <a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </section>
`;

export const registerTemplate = onSubmit => html`
    <section id="register">
        <div class="container">
            <form @submit=${onSubmit} id="register-form">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />

                <p>Username</p>
                <input type="text" placeholder="Enter Username" name="username" required />

                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password" required />

                <p>Repeat Password</p>
                <input type="password" placeholder="Repeat Password" name="repeatPass" required />
                <hr />

                <input type="submit" class="registerbtn" value="Register" />
            </form>
            <div class="signin">
                <p>Already have an account? <a href="/login">Sign in</a>.</p>
            </div>
        </div>
    </section>
`;

export const createTemplate = onSubmit => html`
    <section id="create-listing">
        <div class="container">
            <form @submit=${onSubmit} id="create-form">
                <h1>Create Car Listing</h1>
                <p>Please fill in this form to create an listing.</p>
                <hr />

                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand" />

                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model" />

                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description" />

                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year" />

                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl" />

                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price" />

                <hr />
                <input type="submit" class="registerbtn" value="Create Listing" />
            </form>
        </div>
    </section>
`;

export const editTemplate = (car, onSubmit) => html`
    <section id="edit-listing">
        <div class="container">
            <form @submit=${onSubmit} id="edit-form">
                <h1>Edit Car Listing</h1>
                <p>Please fill in this form to edit an listing.</p>
                <hr />

                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand" .value=${car.brand} />

                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model" .value=${car.model} />

                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description" .value=${car.description} />

                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year" .value=${car.year} />

                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${car.imageUrl} />

                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price" .value=${car.price} />

                <hr />
                <input type="submit" class="registerbtn" value="Edit Listing" />
            </form>
        </div>
    </section>
`;
