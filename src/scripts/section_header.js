//Мини-код для отображения шапки при прокрутке

let sectionHeader = document.querySelector('.section-header');

const body = document.querySelector('body');

 
window.addEventListener('scroll', siteScroll)
function siteScroll (){
    sectionHeader.style.opacity = '0.5';
    sectionHeader.style.backgroundColor = '#FFC64F';
    sectionHeader.style.transition = '0.3s'

};

sectionHeader.addEventListener('mouseover', onHeader)
function onHeader (){
    sectionHeader.style.opacity = '1';
    sectionHeader.style.backgroundColor = '#111111';
    sectionHeader.style.transition = '0.3s';


};

sectionHeader.addEventListener('mouseout', outHeader);
function outHeader () {
    sectionHeader.style.opacity = 0.5;
    sectionHeader.style.transition = '0.3s';

};

//let headOffsetTop = sectionHeader.offsetParent;
//    console.log(headOffsetTop);

    const headTopCoord = sectionHeader.getBoundingClientRect().top;
    const headTopDocCoord = headTopCoord + document.body.scrollTop;

    console.log(headTopCoord);
    console.log(headTopDocCoord);



