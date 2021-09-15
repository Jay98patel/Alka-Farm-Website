/* import lightGallery from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.3";

import lgZoom from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.3/plugins/zoom"; */


new Splide( '.splide', {
    rewind:true,
	perPage: 3,
	breakpoints: {
		'640': {
			perPage: 2,
			gap    : '1rem',
		},
		'480': {
			perPage: 1,
			gap    : '1rem',
		},
	}
} ).mount();

lightGallery(document.getElementById('aniimated-thumbnials'), {
    thumbnail:false,
    mode: 'lg-fade',
    animateThumb: true,
    showThumbByDefault: false,
    speed: 500,
}); 

//menu toggle 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

// remove menu mobile

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => {
    n.addEventListener('click', linkAction);
});



//==================== SCROLL SECTIONS ACTIVE LINK ====================
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//=================== change header ===================

function scrollHeader() {
    const nav = document.getElementById('header');
    scrollY >= 200 ? nav.classList.add('scroll-header') : nav.classList.remove('scroll-header');

}

window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 220) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

