AOS.init();
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

const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.style.opacity = 1;
    } else {
        nav.style.opacity = 0;
    }
})

// SKILLS ROTATION

let tracker = document.getElementById('tracker');
let skills = document.getElementById('skills');

tracker.addEventListener('mousemove', (e) => {
  // get percentage (current cursor, total size)
  let x = e.pageX - (tracker.offsetLeft + (tracker.offsetWidth / 2));
  let y = e.pageY - (tracker.offsetTop + (tracker.offsetHeight / 2));
  
  x = x / (tracker.offsetWidth / 2);
  y = y / (tracker.offsetHeight / 2);
  
  // percentage * 45 -> max rotate
  
  let rotatedY = x * 45;
  let rotatedX = y * -45;
  
  // apply style
  skills.style.transform = `rotateX(${rotatedX}deg) rotateY(${rotatedY}deg`
});