window.addEventListener('DOMContentLoaded', () => {
  //== FAQ ==//

  function activeQuestion() {
    const list = document.querySelectorAll('.questions__item');

    if (!list) return false;

    list.forEach((item) => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
      });

      item.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) item.classList.toggle('active');
      });
    });
  }

  activeQuestion();

  //== HEADER SCROLL= ==//

  function scrollHeader() {
    const topHeaderHeight = document.querySelector('.header__top').offsetHeight;
    const bottomHeader = document.querySelector('.header__bottom');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > topHeaderHeight) {
      bottomHeader.classList.add('fixed');
    } else {
      bottomHeader.classList.remove('fixed');
    }
  }

  window.addEventListener('scroll', scrollHeader);

  //== SCROLL PROGRESS ==//

  function progress() {
    const progressBar = document.querySelector('.progress__line');
    const progressBarLength =
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    progressBar.style.width = `${progressBarLength}%`;
  }

  window.addEventListener('scroll', progress);

  //== SLIDER ==//

  function slider() {
    const button = document.querySelector('.team__button');
    const slider = document.querySelector('.team__list');

    function recalculateSliderWidth() {
      return slider.offsetWidth;
    }

    function updateSlidePosition() {
      const sliderWidth = recalculateSliderWidth();
      const newTransformValue = -sliderWidth * currentSlide + 'px';
      slider.style.left = newTransformValue;
    }

    if (!button && !slider) return false;

    let currentSlide = 0;

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slider.children.length;
      updateSlidePosition();
    }

    button.addEventListener('click', nextSlide);
    window.addEventListener('resize', updateSlidePosition);
  }

  slider();

  //== SOCIAL MENU ==//

  function toggleSocialMenu() {
    const socialButton = document.querySelector('.header__button_social');
    const socialMenu = document.querySelector('.header__social');

    socialButton.addEventListener('click', () => {
      socialMenu.classList.toggle('active');
    });
  }

  toggleSocialMenu();

  //== MENU ==//

  function toggleMenu() {
    const menu = document.querySelector('.menu');
    const menuButton = document.querySelector('.header__button_menu');

    menuButton.addEventListener('click', () => {
      menuButton.classList.toggle('active');
      menu.classList.toggle('active');
    });
  }

  toggleMenu();
});
