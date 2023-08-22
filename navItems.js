const navItemList = [
  { id: 1, name: 'PC', fIconClass: 'fas fa-desktop' },
  { id: 1, name: 'Playstation', fIconClass: 'fab fa-playstation' },
  { id: 1, name: 'Xbox', fIconClass: 'fab fa-xbox' },
  { id: 1, name: 'Nintendo', fIconClass: 'fas fa-gamepad' }
];

export function navItems(items) {
  navItemList.map(item => {
    const html = `
    <li class="nav-item">
    <a href="#" class="nav-item-link"><i class='${item.fIconClass}'></i>${item.name}<i class="fas fa-angle-down"></i></a>
    <div class="dropdown">
    <div class="dropdown-content">
      <div class="menu-title">
        <span>Platforms</span>
        <a href="#">View all</a>
      </div>
      <div class="platforms">
        <a href="#">
          <div class="steam icon">
          <div class="steam-icon icon-inner"></div>
          </div>
          Steam
        </a>
        <a href="#">
          <div class="ubisoft-connect icon">
            <div class="ubisoft-connect-icon icon-inner"></div>
          </div>
          Ubisoft Connect
        </a>
        <a href="#">
          <div class="ea-app icon">
          <div class="ea-app-icon icon-inner"></div>
          </div>
          EA App
        </a>
        <a href="#">
          <div class="battle-net icon">
          <div class="battle-net-icon icon-inner"></div>
          </div>
          Battle.net
        </a>
        <a href="#">
        <div class="rockstar icon">
          <div class="rockstar-icon icon-inner"></div>
          </div>
          Rockstar
        </a>
        <a href="#" id="product-menu-platform-gog-com">
          <div class="gog-com icon">
          <div class="gog-com-icon icon-inner"></div>
          </div>
          GOG.com
        </a>
        <a href="#">
          <div class="microsoft icon">
          <div class="microsoft-icon icon-inner"></div>
          </div>
          Microsoft Store
        </a>
        <a href="#">
          <div class="epic icon">
          <div class="epic-icon icon-inner"></div>
          </div>
          Epic
        </a>
      </div>
      <div class="menu-title">
        <span>Prepaid cards</span>
        <a href="#">View all</a>
      </div>
      <div class="prepaid">
        <a href="#">
          <img src="/images/pc-steam-gift.svg" alt="Stream Gift" />
          <span>Steam Gift Cards</span>
        </a>
        <a href="#">
          <img src="images/pc-gift.svg" alt="Gift" />
          <span>IG Gift Cards</span>
        </a>
        <a href="#">
          <img src="/images/pc-blizzard-gift.svg" alt="Blizzard Gift" />
          <span>Blizzard Gift Cards</span>
        </a>
      </div>
    </div>
    </div>
    </li>`;
    items.insertAdjacentHTML('beforeend', html);
  });
}
