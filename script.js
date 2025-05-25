
// Bloque le scroll au chargement
/* 
document.body.style.overflow = "hidden";
window.scrollTo(0, 0);

// Le réactive après 3 secondes
setTimeout(() => {
  document.body.style.overflow = "auto";
}, 1000);
window.addEventListener("load", (event) => {
    window.scrollTo(0, 0);
}); */

const button_start = document.getElementById("start_action");

button_start.addEventListener("click", (event) => {
    window.scrollTo({
        top: 0.5 * screen.height,
        left: 0,
        behavior: "smooth"
    });
});

document.querySelectorAll('.floating-card').forEach(card => {
    let isDragging = false;
    let offsetX, offsetY;

    const container = document.querySelector('.canva');

    card.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - card.offsetLeft;
        offsetY = e.clientY - card.offsetTop;
        card.style.zIndex = 999;
        card.style.cursor = "grabbing";
        });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const containerRect = container.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();

        let newLeft = e.clientX - offsetX;
        let newTop = e.clientY - offsetY;

        // Clamp inside container
        newLeft = Math.max(containerRect.left, Math.min(newLeft, containerRect.right - cardRect.width));
        newTop = Math.max(containerRect.top, Math.min(newTop, containerRect.bottom - cardRect.height));

        card.style.left = `${newLeft - containerRect.left}px`;
        card.style.top = `${newTop - containerRect.top}px`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        card.style.cursor = "grab";
    });
});

// CANimation phrases

const phrases = [
    "Alternance webdesign 2025-2026",
    "Design UX/UI orienté utilisateur",
    "Passionné par l’architecture et le graphisme",
    "Disponible pour des projets créatifs"
];

let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;
const speed = 40;
const delayBetweenPhrases = 1000;
const target = document.querySelector(".search-texte");

function typeEffect() {
    const fullText = phrases[currentPhrase];
    if (isDeleting) {
        currentChar--;
    } else {
        currentChar++;
    }

    target.textContent = fullText.substring(0, currentChar);

    if (!isDeleting && currentChar === fullText.length) {
        setTimeout(() => isDeleting = true, delayBetweenPhrases);
    } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
    }

    setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Curseur clignotant
const cursor = document.createElement("span");
cursor.textContent = "|";
cursor.style.marginLeft = "2px";
cursor.style.animation = "blink 0.5s infinite";
cursor.style.color = "var(--white)";
target.parentNode.insertBefore(cursor, target.nextSibling);

const style = document.createElement("style");
style.textContent = `
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;
document.head.appendChild(style);

// const cards = document.querySelectorAll('.article');

// cards.forEach(card => {
//     const img = card.querySelector('img');

//     card.addEventListener('mousemove', (e) => {
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;

//         const offsetX = (x - rect.width / 2) / 20;
//         const offsetY = (y - rect.height / 2) / 20;

//         const imgOffsetX = (x - rect.width / 2) / 30;
//         const imgOffsetY = (y - rect.height / 2) / 30;

//         card.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
//         img.style.transform = `translate(${imgOffsetX}px, ${imgOffsetY}px)`;
//     });

//     card.addEventListener('mouseleave', () => {
//         card.style.transform = 'translate(0px, 0px)';
//         img.style.transform = 'translate(0px, 0px)';
//     });
// });

const nav = document.querySelector('.floating-nav');
    const indicator = document.querySelector('.nav-indicator');
    const links = Array.from(nav.querySelectorAll('a'));

    function updateIndicator(link) {
    const rect = link.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    indicator.style.width = `${rect.width}px`;
    indicator.style.left = `${rect.left - navRect.left}px`;

    // Highlight active link
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
}

function onScroll() {
    let current = null;
    const scrollPos = window.scrollY + 150;

    links.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section && section.offsetTop <= scrollPos) {
            current = link;
        }
    });

    if (current) {
        indicator.style.opacity = '1';
        updateIndicator(current);
    } else {
        indicator.style.opacity = '0';
        links.forEach(l => l.classList.remove('active'));
    }
}
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', () => {
        const active = document.querySelector('.floating-nav a.active');
        if (active) updateIndicator(active);
    });

// Initialisation de la boucle pour la navigation
onScroll();

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelectorAll('.parallax-element').forEach(el => {
        const speed = el.dataset.speed || 0.3; // Vitesse
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});