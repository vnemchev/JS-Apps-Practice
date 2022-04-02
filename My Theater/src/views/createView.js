import { html } from '../../node_modules/lit-html/lit-html.js';
import * as movieService from '../api/movies.js';

const createTemplate = onCreate => html`
    <section id="createPage">
        <form @submit="${onCreate} class="create-form">
            <h1>Create Theater</h1>
            <div>
                <label for="title">Title:</label>
                <input id="title" name="title" type="text" placeholder="Theater name" value="" />
            </div>
            <div>
                <label for="date">Date:</label>
                <input id="date" name="date" type="text" placeholder="Month Day, Year" />
            </div>
            <div>
                <label for="author">Author:</label>
                <input id="author" name="author" type="text" placeholder="Author" />
            </div>
            <div>
                <label for="description">Description:</label>
                <textarea id="description" name="description" placeholder="Description"></textarea>
            </div>
            <div>
                <label for="imageUrl">Image url:</label>
                <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value="" />
            </div>
            <button class="btn" type="submit">Submit</button>
        </form>
    </section>
`;

export function createView(ctx) {
    ctx.render(createTemplate(onCreate));

    async function onCreate(e) {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));

        if (Object.values(formData).some(x => x == '')) {
            return alert('All fields are required!');
        }

        await movieService.create({
            title: formData.title,
            date: formData.date,
            author: formData.author,
            imageUrl: formData.imageUrl,
            description: formData.description,
        });

        e.target.reset();
        ctx.page.redirect('/');
    }
}
