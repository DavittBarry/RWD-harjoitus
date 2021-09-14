var header = document.querySelector('header');
var menuBtn = document.getElementById('menuBtn');
var menu = document.getElementById('menu');
var closeMenuBtn = document.getElementById('closeMenuBtn');
var menuLinks = document.querySelectorAll('#menu a');
var lastScrollTop = 0;

function setHash(hash) {
    var el = document.querySelector(hash)
    el.id = hash + '-tmp';
    window.location.hash = hash;
    el.id = hash.replace('#', '');
}

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
        else if (currentScrollTop) {
            header.classList.add('condensed');
            header.classList.remove('hide');
    }


    if (currentScrollTop <= header.offsetHeight) {
        header.classList.remove('condensed');
    }
    lastScrollTop = currentScrollTop;
}
    for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].onclick = function(e) {
        e.preventDefault();
        var sel = this.getAttribute('href');
        var el = document.querySelector(sel);
        el.scrollIntoView({
            behavior: 'smooth'
        });
        setHash(sel);
        menu.classList.remove('show');
        menuBtn.classList.remove('hide');
        setTimeout(function() {
            header.classList.add('hide');
        }, 1000);
    };
}


