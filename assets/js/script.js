/* let name="JAY"
let text = `Hello ${name}, Welcome to the Magic World `;
const speech = new SpeechSynthesisUtterance(text);
speech.volume = 10;
speech.rate = 0.5;
speech.pitch = 1;
// console.log(speech)
window.speechSynthesis.speak(speech); */

//menu toggle 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu');

// remove menu mobile

const navLink=document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
    console.log("caaled")
}

navLink.forEach(n=>{
    n.addEventListener('click',linkAction);
});