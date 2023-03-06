"use strict"

const spoilerLink = document.querySelector('.spoiler__link');
const spoiler = document.querySelector('.spoiler');
const swiperBlock = document.querySelector('.swiper');

let spoilerStatus = 0;

spoilerLink.addEventListener('click', (evt) =>{
    evt.preventDefault();
    
    if (spoilerStatus === 0){
        swiperBlock.style.display = 'none';
        spoiler.style.display = 'block';
        setTimeout(() => {
            spoiler.classList.remove('fadeOut');
            spoiler.classList.add('fadeIn');
        }, 50);

        spoiler.style.height = 'fit-content';
        spoilerStatus = 1;
    }else if(spoilerStatus === 1){
        setTimeout(() => {swiperBlock.style.display = 'block'}, 550);
        setTimeout(() => {spoiler.style.display = 'none'}, 550);
        spoilerStatus = 0;
        spoiler.classList.remove('fadeIn');
        spoiler.classList.add('fadeOut');
    }
    console.log(spoiler)
})

var swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    autoHeight: true,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    freeMode: { enabled: true },
  });