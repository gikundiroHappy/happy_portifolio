var swiperPortfolio = new Swiper('.mySwiper', {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });

  const shownav = document.getElementById("show")
  const nav = document.getElementById("nav")
  const closeNavButton = document.getElementById("close");
  const bottomBar = document.getElementById("bottom-bar");
  const navLink = document.getElementsByClassName("navlink")

  shownav.addEventListener("click",Handleshow)
  closeNavButton.addEventListener("click", handleCloseNav);
  navLink.addEventListener("click", handleCloseNav);

  function Handleshow(){
    nav.classList.remove("hidden");
    bottomBar.classList.add("hidden");
  }

  function handleCloseNav() {
    nav.classList.add("hidden");
    bottomBar.classList.remove("hidden");
  }
