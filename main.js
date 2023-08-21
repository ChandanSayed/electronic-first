import './style.scss';
import { items } from './trendingItems';

document.querySelector('#app').innerHTML = `
  <section class="trending">
    <div class="trending-container">
      <div class="trending-container-flex">
        <h2>Trending</h2>
        <a href="#">View all</a>
      </div>
      <div class="trending-container-grid items"></div>
    </div>
  </section>
`;

items(document.querySelector('.items'));
