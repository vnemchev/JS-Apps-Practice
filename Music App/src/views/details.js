import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as albumService from '../api/albums.js';

const detailsTemplate = (album, user, onDelete) => html`
    <section id="detailsPage">
        <div class="wrapper">
            <div class="albumCover">
                <img src=${album.imgUrl} />
            </div>
            <div class="albumInfo">
                <div class="albumText">
                    <h1>Name: ${album.name}</h1>
                    <h3>Artist: ${album.artist}</h3>
                    <h4>Genre: ${album.genre}</h4>
                    <h4>Price: ${album.price}</h4>
                    <h4>Date: ${album.releaseDate}</h4>
                    <p>${album.description}</p>
                </div>

                ${user && album._ownerId == user._id
                    ? html`
                          <div class="actionBtn">
                              <a href="/edit/${album._id}" class="edit">Edit</a>
                              <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                          </div>
                      `
                    : nothing}
            </div>
        </div>
    </section>
`;

export async function detailsView(ctx) {
    const albumId = ctx.params.id;
    const album = await albumService.getOne(albumId);

    ctx.render(detailsTemplate(album, ctx.user, onDelete));

    async function onDelete() {
        await albumService.remove(albumId);
        ctx.page.redirect('/catalog');
    }
}
