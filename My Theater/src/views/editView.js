import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as movieService from '../api/movies.js';

const editTemplate = (movie, onEdit) => html`
    <section id="editPage">
        <form @submit=${onEdit} class="theater-form">
            <h1>Edit Theater</h1>
            <div>
                <label for="title">Title:</label>
                <input id="title" name="title" type="text" placeholder="Theater name" .value=${movie.title} />
            </div>
            <div>
                <label for="date">Date:</label>
                <input id="date" name="date" type="text" placeholder="Month Day, Year" .value=${movie.date} />
            </div>
            <div>
                <label for="author">Author:</label>
                <input id="author" name="author" type="text" placeholder="Author" .value=${movie.author} />
            </div>
            <div>
                <label for="description">Theater Description:</label>
                <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    .value=${movie.description}
                ></textarea>
            </div>
            <div>
                <label for="imageUrl">Image url:</label>
                <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" .value=${movie.imageUrl} />
            </div>
            <button class="btn" type="submit">Submit</button>
        </form>
    </section>
`;

export async function editView(ctx) {
    const movieId = ctx.params.id;
    const movie = await movieService.getOne(movieId);

    ctx.render(editTemplate(movie, onEdit));

    async function onEdit(e) {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));

        if (Object.values(formData).some(x => x == '')) {
            return alert('All fields are required!');
        }

        await movieService.edit(movieId, {
            title: formData.title,
            date: formData.date,
            author: formData.author,
            description: formData.description,
            imageUrl: formData.imageUrl,
        });

        e.target.reset();
        ctx.page.redirect(`/details/${movieId}`);
    }
}
