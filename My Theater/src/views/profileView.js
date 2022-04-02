import { html } from '../../node_modules/lit-html/lit-html.js';
import * as movieService from '../api/movies.js';

const profileTemplate = (user, movies) => html`
    <section id="profilePage">
        <div class="userInfo">
            <div class="avatar">
                <img src="./images/profilePic.png" />
            </div>
            <h2>${user.email}</h2>
        </div>
        <div class="board">
            ${movies.length > 0
                ? movies.map(movieCard)
                : html`<div class="no-events">
                      <p>This user has no events yet!</p>
                  </div>`}
        </div>
    </section>
`;

const movieCard = movie => html`
    <div class="eventBoard">
        <div class="event-info">
            <img src=${movie.imageUrl} />
            <h2>${movie.title}</h2>
            <h6>${movie.date}</h6>
            <a href="/details/${movie._id}" class="details-button">Details</a>
        </div>
    </div>
`;

export async function profileView(ctx) {
    const user = ctx.user;
    const movies = await movieService.getOwn(user._id);

    ctx.render(profileTemplate(user, movies));
}
