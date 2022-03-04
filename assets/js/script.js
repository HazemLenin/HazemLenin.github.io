AOS.init(); // Initializeing AOS for fade effect


////// Up button
let myButton = document.getElementById("up-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => scrollFunction();

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.opacity = 1;
    myButton.style.display = 'block';
  } else {
    myButton.style.opacity = 0;
    myButton.style.opacity = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
myButton.onclick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let navbar = document.getElementsByClassName('navbar')[0];
let navbarCollapse = document.getElementById('navbarNavAltMarkup');

let sections = [
    document.getElementById('section-1'),
    document.getElementById('section-2'),
    document.getElementById('section-3'),
    document.getElementById('section-4'),
];

let links = [
    document.getElementById('nav-section-1'),
    document.getElementById('nav-section-2'),
    document.getElementById('nav-section-3'),
    document.getElementById('nav-section-4'),
];

sections[0].style.paddingTop = navbar.offsetHeight + 'px';

function isVisible (ele) {
    const { top, bottom } = ele.getBoundingClientRect();
    const vHeight = (window.innerHeight || document.documentElement.clientHeight);

    return (
        (top > 0 || bottom > 0) &&
        top < vHeight / 2
    );
}

function checkSections() {
    for (let i=0;i<sections.length;i++) {

        if (isVisible(sections[i]) && !links[i].classList.contains('active')) {
            

            for (let j=0;j<links.length;j++) {

                links[j].classList.remove('active');

            }

            links[i].classList.add('active');

        }
    }
}

checkSections();

if (window.scrollY > 0) {

    navbar.classList.replace('bg-transparent', 'bg-dark');

}else{

    navbar.classList.replace('bg-dark', 'bg-transparent');

}

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {

        navbar.classList.replace('bg-transparent', 'bg-dark');

    }else{

        navbar.classList.replace('bg-dark', 'bg-transparent');

    }

    checkSections();

});

// Sidenav
let sidenavToggle = document.getElementById('sidenav-toggle');
let sidenav = document.getElementsByClassName('sidenav')[0];

sidenavToggle.addEventListener('click', () => {
    navbar.classList.contains('bg-transparent') && navbar.classList.replace('bg-transparent', 'bg-dark');

    if (sidenav.classList.contains('active')) {
        sidenav.classList.remove('active');
    }else{
        sidenav.classList.add('active');
    }
});


function closeSidenav() {
    if(sidenav.classList.contains('active')) {
        sidenav.classList.remove('active');
    }
}

let sidenavLinks = document.getElementsByClassName('sidenav-link');

for (let i=0;i<sidenavLinks.length;i++) {
    sidenavLinks[i].addEventListener('click', closeSidenav)
}

// Typing effect
let typing = document.getElementById("typing");
let cursor = document.getElementById("cursor");
let txt = typing.innerText;
let skills = [
    'Web',
    'JS',
    'SQL',
    'Python',
    'Java',
    'Ruby on rails',
    'ReactJS',
];

let skillsIndex = 0; // which word we are in now
// let blink = true; // it's now in scss and later I will make cursor blinks on finishing typing a word
let i = 0; // which letter we are in now
let speed = 75; // typing speed (delay between letters)
let delay = 2000; // waiting client to read the word

// type word letters
function typeWord() {
    if (i < skills[skillsIndex].length) {
        typing.innerText += skills[skillsIndex].charAt(i);
        i++;
        // calls itself after milliseconds to type next letter
        setTimeout(() => typeWord(), speed);
    }else{// when word is completed, start deleting it after 2 sec
        setTimeout(() => deleteWord(), delay);
    }
}

function deleteWord() {
    if (i >= 0) {
        // deletes last character
        typing.innerText = typing.innerText.replace(/(\s+)?.$/, '');
        i--;
        // calls itself after milliseconds to delete previous letter
        setTimeout(() => deleteWord(skills[skillsIndex]), speed);
    }else{
        i = 0;
        // is word finished ? start from first letter : move to next letter
        skillsIndex + 1 == skills.length ? skillsIndex = 0 : skillsIndex++;
        typeWord();
    }
}

// start recursioning
typeWord();

let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})