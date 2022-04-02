import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

export const detailsTemplate = (pet, onDelete, onDonate) => html`
    <section id="detailsPage">
        <div class="details">
            <div class="animalPic">
                <img src=${pet.image} />
            </div>
            <div>
                <div class="animalInfo">
                    <h1>Name: ${pet.name}</h1>
                    <h3>Breed: ${pet.breed}</h3>
                    <h4>Age: ${pet.age}</h4>
                    <h4>Weight: ${pet.weight}</h4>
                    <h4 class="donation">Donation: ${pet.donations}$</h4>
                </div>
                ${pet.hasUser
                    ? html`
                          <div class="actionBtn">
                              ${pet.isOwner
                                  ? html`
                                        <a href="/edit/${pet._id}" class="edit">Edit</a>
                                        <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                                    `
                                  : html`
                                        ${pet.hasDonated == 1
                                            ? nothing
                                            : html`
                                                  <a @click=${onDonate} href="javascript:void(0)" class="donate"
                                                      >Donate</a
                                                  >
                                              `}
                                    `}
                          </div>
                      `
                    : nothing}
            </div>
        </div>
    </section>
`;
