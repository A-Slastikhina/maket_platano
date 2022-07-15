let toggleItems = document.querySelectorAll('.toggle__item');

for (let toggleItem of toggleItems) {
   toggleItem.addEventListener('click', toggleClick)
     function toggleClick (){
        toggleItem.style.boxShadow = '0px 0px 15px 10px #ffffff'
        
     }
}