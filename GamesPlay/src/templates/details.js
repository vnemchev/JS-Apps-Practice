import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { commentsList } from './comments.js';

export const detailsTemplate = (game, user, comments, onDelete, onComment) => html`
    <section id="game-details">
        <h1>Game Details</h1>
        <div class="info-section">
            <div class="game-header">
                <img class="game-img" src=${game.imageUrl} />
                <h1>${game.title}</h1>
                <span class="levels">MaxLevel: ${game.maxLevel}</span>
                <p class="type">${game.category}</p>
            </div>

            <p class="text">${game.summary}</p>

            ${commentsList(comments)}
            ${game.isOwner
                ? html`
                      <div class="buttons">
                          <a href="/edit/${game._id}" class="button">Edit</a>
                          <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
                      </div>
                  `
                : nothing}
        </div>

        ${user && !game.isOwner
            ? html`
                  <article class="create-comment">
                      <label>Add new comment:</label>
                      <form @submit=${onComment} class="form">
                          <textarea name="comment" placeholder="Comment......"></textarea>
                          <input class="btn submit" type="submit" value="Add Comment" />
                      </form>
                  </article>
              `
            : nothing}
    </section>
`;
