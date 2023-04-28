import FavoriteCafeIdb from '../../data/favorite-restone-idb';
import { createCafeItemTemplate } from '../templates/template-creator';

const FavoritePage = {
  async render() {
    return `
      <section class="list-content favorite-cafe">
        <div class="container">
            <div class="list-cards" id="favorite-page">

            </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const cafes = await FavoriteCafeIdb.getAllCafes();
    const favoriteContainer = document.querySelector('#favorite-page');
    cafes.forEach((cafe) => {
      favoriteContainer.innerHTML += createCafeItemTemplate(cafe);
    });
  },
};

export default FavoritePage;
