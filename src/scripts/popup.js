// popup

let openPopup = document.querySelector('.intro__burger');
let closePopup = document.querySelector('.popup__close-btn');
let popup = document.querySelector('.popup');
//let popupClosed = document.querySelector('.popup-closed');

openPopup.onclick = function(){
if (popup.classList.contains('popup-closed')) {
    popup.classList.remove('popup-closed')
} 
}
closePopup.onclick = function(){    
    popup.classList.add('popup-closed')
    };

