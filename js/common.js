var header = document.querySelector('header');
var menuBtn = document.getElementById('menuBtn');
var menu = document.getElementById('menu');
var closeMenuBtn = document.getElementById('closeMenuBtn');
var lastScrollTop = 0;

// Menu button click event handler
menuBtn.onclick = function() {
    menu.classList.add('show');
    menuBtn.classList.add('hide');
};

closeMenuBtn.onclick = function() {
    menu.classList.remove('show');
    menuBtn.classList.remove('hide');
};

window.onscroll = function () {
    var currentScrollTop = document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop && currentScrollTop > header.offsetHeight) {
        console.log('Going down...')
        header.classList.add('hide')
        }
        else {
            console.log('Going up...')
            header.classList.remove('hide');
        
    }
    lastScrollTop = currentScrollTop;
};
