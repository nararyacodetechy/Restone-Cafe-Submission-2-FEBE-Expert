import RestaurantApi from '../../data/restaurant-api-source';
import { createCafeItemTemplate } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
    <section class="jumbotron">
        <h1 tabindex="0" class="title">Restone <span tabindex="-1">Cafe</span></h1>
        <h2 tabindex="0" class="description"><span tabindex="-1">“</span> Delicious meal with a Million Impressions
            <span tabindex="-1">”</span>
        </h2>
        <a href="#" aria-label="Click to Learn More" class="learn-more">Learn More</a>
    </section>
    <section class="foods">
        <div class="image-food">
            <img tabindex="0" src="https://cdn.idntimes.com/content-images/community/2021/05/fromandroid-12b1e398887d2a851463161761e3207e.jpg"
                alt="bbq-try">
        </div>
        <div class="description-food">
            <div class="big-title-food">
                <h2 tabindex="0">The Art Of Big Foods</h2>
            </div>
            <div class="type-food">
                <div class="type-food one">
                    <h3 tabindex="0">Brisket</h3>
                    <p tabindex="0">30-day wet-aged beef brisket rubbed with our 4R Brisket Rub and smoked for 18
                        hours. Hand
                        sliced to
                        order.</p>
                </div>
                <div class="type-food two">
                    <h3 tabindex="0">Chicken</h3>
                    <p tabindex="0">Seasoned with 4R All Purpose Rub and smoked to perfection. Enjoy on the bone or
                        pulled and
                        tossed in 4R
                        Signature Sauce.</p>
                </div>
                <div class="type-food three">
                    <h3 tabindex="0">Pork</h3>
                    <p tabindex="0">Classic pulled pork from bone-in pork shoulder rubbed with our 4R All Purpose
                        Rub and smoked
                        for 12 hours
                        until fork-tender.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="foods">
        <div class="image-food two">
            <img tabindex="0"
                src="https://wiratech.co.id/wp-content/uploads/2018/11/aneka-minuman-segar.jpg"
                alt="bbqbestosouthsoul">
        </div>
        <div class="description-food">
            <div class="big-title-food">
                <h2 tabindex="0">The Greater Drinks</h2>
            </div>
            <div class="type-food">
                <div class="type-food one">
                    <h3 tabindex="0">Better</h3>
                    <p tabindex="0">30-day wet-aged beef brisket rubbed with our 4R Brisket Rub and smoked for 18
                        hours. Hand
                        sliced to
                        order.</p>
                </div>
                <div class="type-food two">
                    <h3 tabindex="0">Bigger</h3>
                    <p tabindex="0">Seasoned with 4R All Purpose Rub and smoked to perfection. Enjoy on the bone or
                        pulled and
                        tossed in 4R
                        Signature Sauce.</p>
                </div>
                <div class="type-food three">
                    <h3 tabindex="0">Quicker</h3>
                    <p tabindex="0">Classic pulled drink from bone-in lemon shoulder rubbed with our 4R All Purpose
                        Rub and smoked
                        for 12 hours
                        until fork-tender.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="list-content" id="explore-cafe">
        <div class="big-title">
            <h2 tabindex="0">Explore <span tabindex="-1">Cafe</span></h1>
        </div>
        <div class="container">
            <div class="list-cards" id="list-cafe">

            </div>
        </div>
    </section>
      `;
  },

  async afterRender() {
    const movies = await RestaurantApi.listRestaurant();

    const moviesContainer = document.querySelector('#list-cafe');
    movies.forEach((cafe) => {
      moviesContainer.innerHTML += createCafeItemTemplate(cafe);
    });
  },
};

export default HomePage;
