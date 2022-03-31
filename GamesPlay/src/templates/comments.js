import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

export const commentsList = comments => html`
    <div class="details-comments">
        <h2>Comments:</h2>
        ${comments.length > 0
            ? html` <ul>
                  ${comments.map(comment)}
              </ul>`
            : html` <p class="no-comment">No comments.</p> `}
    </div>
`;

const comment = comment => html`
    <li class="comment">
        <p>Content: ${comment.comment}</p>
    </li>
`;
