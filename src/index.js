window.addEventListener('load', () => {
  function navbarClickListener() {
    const menuButton = document.getElementById('mobile-navbar-btn');
    if (!menuButton) {
      return;
    }

    menuButton.addEventListener('click', () => {
      const mobileOverflowMenu = document.getElementById('mobile-menu');
      if (mobileOverflowMenu) {
        // mobileOverflowMenu.classList.toggle('hidden');
        mobileOverflowMenu.classList.toggle('-translate-x-80');
      }

      // svg icons in the hamburger menu.
      const menuOpenBtn = document.getElementById('menu-open-btn');
      const menuCloseBtn = document.getElementById('menu-close-btn');
      menuOpenBtn?.classList.toggle('hidden');
      menuCloseBtn?.classList.toggle('hidden');
    });
  }
  navbarClickListener();

  function highlightNavItem() {
    const path = window.location.href.split('/').pop().split('.')[0];
    if (!path) {
      return;
    }
    const desktop = document.getElementById('desktop-menu');
    console.log('DEBUG path', path);
    if (desktop) {
      const anchors = desktop.querySelectorAll('a');
      for (const el of anchors) {
        console.log('DEBUG el text', el.innerText);
        if (path.toLowerCase() === el.innerText.toLowerCase()) {
          el.classList.add('text-india-yellow');
        }
      }
    }
  }
  highlightNavItem();
});
