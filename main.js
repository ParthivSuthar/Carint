
const navLinks = document.querySelector('.nav-links');
const menu = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-xmark');
const nextButton = document.querySelector('.next')
const prevButton = document.querySelector('.prev')
const clientArea = document.querySelector('.client-area')

menu.addEventListener('click', function () {
    navLinks.style.right = '0px';
});

close.addEventListener('click', function () {
    navLinks.style.right = '-200px';
});


let translateValue = 0;

nextButton.addEventListener('click', function(){
    translateValue -= 100
    clientArea.style.transform = `translateX(${translateValue}%)`
})
prevButton.addEventListener('click', function(){
    translateValue += 100
    clientArea.style.transform = `translateX(${translateValue}%)`
})
