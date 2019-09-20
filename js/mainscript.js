var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
        navToggle.classList.remove('page-header__toggle--closed');
        navToggle.classList.add('page-header__toggle--opened');

    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
        navToggle.classList.remove('page-header__toggle--opened');
        navToggle.classList.add('page-header__toggle--closed');
    }
});

var catImage = document.getElementById('example__slider');
var catRange = document.getElementById('cat-range');
catRange.addEventListener('input',
    function changeImage() {
        if (catRange.value == 0) {
            catImage.src = "img/before.png";
        }
        else if (catRange.value == 2) {
            catImage.src = "img/after.png";
        }
        else {
            catImage.src = "img/before-after.png";
        }
    }, false);