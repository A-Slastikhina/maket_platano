let taxiBtn = document.querySelector('.route__button--taxi');
let transferBtn = document.querySelector('.route__button--transfer');
let trialBtn = document.querySelector('.route__button--trial');
let hidden = document.querySelector('.route__hidden');
let taxiPart = document.querySelector('.route__taxi');
let transferPart = document.querySelector('.route__transfer');
let trialPart = document.querySelector('.route__trial');

transferBtn.onclick = function () {
    transferBtn.style.backgroundColor = '#FFC64F';
    transferBtn.style.transition = '0.8s';
    taxiBtn.style.backgroundColor = 'transparent';
    trialBtn.style.backgroundColor = 'transparent';
    taxiPart.classList.add('route__hidden');
    trialPart.classList.add('route__hidden');
    transferPart.classList.remove('route__hidden');
};

trialBtn.onclick = function () {
    transferBtn.style.backgroundColor = 'transparent';
    taxiBtn.style.backgroundColor = 'transparent';
    trialBtn.style.backgroundColor = '#FFC64F';
    trialBtn.style.transition = '0.8s';
    taxiPart.classList.add('route__hidden');
    transferPart.classList.add('route__hidden');
    trialPart.classList.remove('route__hidden');
};

taxiBtn.onclick = function () {
    taxiBtn.style.backgroundColor = '#FFC64F';
    taxiBtn.style.transition = '0.8s';
    transferBtn.style.backgroundColor = 'transparent';
    trialBtn.style.backgroundColor = 'transparent';
    taxiPart.classList.remove('route__hidden');
    transferPart.classList.add('route__hidden');
    trialPart.classList.add('route__hidden');
}


