
// СЛАЙДЕР ХЭДЛАЙНЕРЫ


let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.headliners__slider-line');
let btnNext = document.querySelector('.head__slider-btn--next');
let btnPrev = document.querySelector('.head__slider-btn--prev');

btnNext.onclick = function(){
offset = offset + 293;  //offset+=256;
if (offset>879 ){
    offset = 0;
}
sliderLine.style.left = - offset + 'px';
};

btnPrev.onclick = function(){
    offset = offset - 293;  //offset+=256;
    if (offset<0 ){
        offset = 879;
    }
    sliderLine.style.left = - offset + 'px';
    };


// СЛАЙДЕР ДЛЯ АРТИСТОВ
const singerSliderLine = document.querySelector('.singers__slider-line');
let nextSinger = document.querySelector('.singers__slider-btn--next');
let prevSinger = document.querySelector('.singers__slider-btn--prev');

nextSinger.onclick = function () {
    offset = offset + 233;
    if (offset>932){
        offset = 0;
    }
    singerSliderLine.style.left = - offset + 'px';
};

prevSinger.onclick = function(){
    offset = offset - 233;
    if (offset<0){
        offset = 932;
    }
    singerSliderLine.style.left = - offset + 'px';   
}

// СЛАЙДЕР ДЛЯ БИЛЕТОВ

const ticketsSliderLine = document.querySelector('.tickets__slider-line');
let nextTicket = document.querySelector('.tickets__slider-btn--next');
let prevTicket = document.querySelector('.tickets__slider-btn--prev');

nextTicket.onclick = function() {
    offset = offset + 255;
    if (offset>765) {
        offset = 0;
    }
    ticketsSliderLine.style.left = - offset + 'px';
}

prevTicket.onclick = function () {
    offset = offset - 255;
    if (offset<0){
        offset = 765;
    }
    ticketsSliderLine.style.left = -offset + 'px';
}

