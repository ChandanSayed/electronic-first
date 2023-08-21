const listItems = [
  { id: 1, name: 'Sengoku Dynasty', imgSrc: './images/sengoku-dynasty.jpg', discount: '20%', price: 19.99 },
  { id: 1, name: 'Sengoku Dynasty', imgSrc: './images/the-sims-4-horse-ranch.jpg', discount: '20%', price: 19.99 },
  { id: 3, name: 'Sengoku Dynasty', imgSrc: './images/remnant-2.jpg', discount: '20%', price: 19.99 }
];

export function items(items) {
  listItems.map(listItem => {
    let itemHtml = `
    <div class="item">
        <figure class="item-image">
          <img src="${listItem.imgSrc}" alt="${listItem.name}">
          <p class="discount">-${listItem.discount}</p>
        </figure>
        <div class="item-title-price">
          <h3 class="title">${listItem.name}</h3>
          <p class="price">${listItem.price}€</p>
        </div>
    </div>
  `;
    items.insertAdjacentHTML('beforeend', itemHtml);
  });
}
