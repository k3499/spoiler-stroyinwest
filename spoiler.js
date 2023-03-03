"use strict"

const spoilerLink = document.querySelector('.spoiler__link');
const spoiler = document.querySelector('.spoiler');
let spoilerStatus = 0;

spoilerLink.addEventListener('click', (evt) =>{
    evt.preventDefault();
    
    if (spoilerStatus === 0){
        spoiler.style.display = 'block';
        //spoiler.style.height = 'auto';
        spoiler.classList.remove('fadeOut');
        spoiler.classList.add('fadeIn');
        spoiler.style.height = 'fit-content';
        spoilerStatus = 1;
    }else if(spoilerStatus === 1){
        //spoiler.style.display = 'none';
        spoilerStatus = 0;
        spoiler.classList.remove('fadeIn');
        spoiler.classList.add('fadeOut');
    }
    console.log(spoilerStatus)
})