// AOS initializer
AOS.init({
    disable: /bot|crawler|spider|crawling/i.test(navigator.userAgent), // Disable AOS if the visitor is a web crawler
    once: true
});


const nav = document.getElementById('nav');

changeOpacityOnScroll();

window.addEventListener('scroll', changeOpacityOnScroll);

function changeOpacityOnScroll(e) {
    if (window.scrollY > 0) {
        nav.style.opacity = 1;
    } else {
        nav.style.opacity = 0;
    }
}

const sidebar = document.getElementById('sidebar');
const sidebarBtn = document.getElementById('sidebar-btn');

sidebarBtn.onclick = () => {
    nav.classList.toggle('sidebar-opened');
    sidebar.classList.toggle('active');
    sidebarBtn.classList.toggle('active');
}

const blobs = document.getElementsByClassName('blob');

const section1 = document.getElementById('section-1');

section1.addEventListener('mousemove', e => {
    for (const blob of blobs) {
        const speed = blob.getAttribute('data-speed');
        const x = (window.innerWidth - (e.pageX * speed)) / 100;
        const y = (window.innerHeight - (e.pageY * speed)) / 100;
        blob.style.transform = `translate(${x}px, ${y}px)`;
    }
});