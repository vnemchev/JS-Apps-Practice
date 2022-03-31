import { detailsTemplate } from '../templates/details.js';
import * as gameService from '../api/games.js';
import * as commentService from '../api/comments.js';

export async function detailsView(ctx) {
    const user = ctx.user;
    const gameId = ctx.params.id;
    const game = await gameService.getOne(gameId);
    const comments = await commentService.getAll(gameId);

    if (user) {
        game.isOwner = game._ownerId == ctx.user._id;
    }

    ctx.render(detailsTemplate(game, user, comments, onDelete, onComment));

    async function onDelete() {
        const choice = confirm(`Are sure you want to delete ${game.title}?`);

        if (choice) {
            await gameService.remove(gameId);
            ctx.page.redirect('/');
        }
    }

    async function onComment(e) {
        e.preventDefault();

        const data = new FormData(e.target);
        const comment = data.get('comment');

        if (comment) {
            await commentService.create({
                gameId: gameId,
                comment: comment,
            });

            e.target.reset();
            ctx.page.redirect(`/details/${gameId}`);
        }
    }
}
