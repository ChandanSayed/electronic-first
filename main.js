import './style.scss';
import { items } from './trendingItems';
import { navItems } from './navItems';

document.querySelector('#app').innerHTML = `
<header class="header">
      <nav class="nav">
        <div class="logo">
          <a href="#" class="navbar-brand"><img src="./images/logo.webp" alt="Logo" /></a>
        </div>
        <div class="navbar">
          <div class="navbar-item-links">
            <a href="#">Trending</a>
            <a href="#">Pre-orders</a>
            <a href="#">Upcoming</a>
            <a href="#">Support 24/7</a>
          </div>
          <div class="navbar-items-search">
            <ul class="navbar-items">
              
            </ul>
            <form action="#" class="search-form">
            <input type="text" placeholder="Minecraft, RPG, multiplayer..."/>
            <button type="submit">Advance Search</button>
              <i class='fas fa-search'></i>
              <i class='fas fa-times'></i>
            </form>
          </div>
        </div>
        <div class="icons">
          <i class="fas fa-shopping-cart"></i>
          <i class="far fa-user-circle"></i>
        </div>
      </nav>
      <div class="header-content">
      <p class="coming">In 10 Days</p>
        <h2 class="header-content-title">
        Starfield Digital Premium <br /> Edition + Early Access
        </h2>
        <div class="header-content-price">
          <span class="header-content-price-discount">-25%</span>
          <p class="header-content-price-original">74.89€</p>
        </div>
      </div>
    </header>
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
navItems(document.querySelector('.navbar-items'));
const searchForm = document.querySelector('.search-form .fa-search');
const navLinks = document.querySelectorAll('.nav-item');

searchForm.addEventListener('click', function (event) {
  event.preventDefault();
  this.style.display = 'none';
  this.parentNode.classList.add('active');
});
document.querySelector('.fa-times').addEventListener('click', function () {
  searchForm.parentNode.classList.remove('active');
  searchForm.style.display = 'block';
});

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    this.querySelector('.nav-item-link').classList.toggle('active');
  });
  link.addEventListener('mouseleave', () => {
    link.querySelector('.nav-item-link').classList.remove('active');
  });
});
