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
  const navLinks = document.querySelectorAll(".navlink");

  shownav.addEventListener("click",Handleshow)
  closeNavButton.addEventListener("click", handleCloseNav);
  navLinks.forEach(link => {
    link.addEventListener("click", handleCloseNav);
  });

  function Handleshow(){
    nav.classList.remove("hidden");
    bottomBar.classList.add("hidden");
  }

  function handleCloseNav() {
    nav.classList.add("hidden");
    bottomBar.classList.remove("hidden");
  }

  const skills = [
    { name: "HTML/CSS", icon: "fa-brands fa-html5" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "ReactJs", icon: "fa-brands fa-react" },
    { name: "Angular", icon: "fa-brands fa-angular" },
    { name: "NodeJs", icon: "fa-brands fa-node-js" },
    { name: "TypeScript", icon: "fa-solid fa-code" },
    { name: "React Native", icon: "fa-brands fa-react" },
    { name: "Python", icon: "fa-brands fa-python" },
    { name: "UI/UX Design", icon: "fa-solid fa-pen-ruler" }
  ];
  
  const container = document.getElementById("skillsContainer");
  const nextBtn = document.getElementById("nextSkill");
  const prevBtn = document.getElementById("prevSkill");
  
  let startIndex = 0;
  const visibleCount = 3;
  
  function renderSkills() {
    container.innerHTML = "";
  
    const visibleSkills = skills.slice(startIndex, startIndex + visibleCount);
  
    visibleSkills.forEach(skill => {
      const div = document.createElement("div");
  
      div.innerHTML = `
        <span><i class="${skill.icon}" style="color:#806bc2"></i></span>
        <p class="text-[12px]">${skill.name}</p>
      `;
  
      prevBtn.style.visibility = startIndex === 0 ? "hidden" : "visible";
      nextBtn.style.visibility = startIndex + visibleCount >= skills.length ? "hidden" : "visible";
  
      container.appendChild(div);
    });
  }
  
  nextBtn.addEventListener("click", () => {
    if (startIndex + visibleCount < skills.length) {
      startIndex++;
      renderSkills();
    }
  });
  
  prevBtn.addEventListener("click", () => {
    if (startIndex > 0) {
      startIndex--;
      renderSkills();
    }
  });
  
  renderSkills();
