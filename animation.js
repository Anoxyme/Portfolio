
/* Hero : title */
gsap.from(".floating-nav", {
  opacity: 0,
  delay: 2,
  duration: 1,
  y: -40,
  ease: "power2.out"
});
gsap.from("#hero-title", {
  opacity: 0,
  delay: 0.3,
  duration: 1,
  y: 20,
  ease: "power2.out"
});
gsap.from(".hero-subtitle", {
  opacity: 0,
  delay: 0.8,
  y: 20,
  ease: "power2.out",
});
gsap.from(".hero-bigtitle", {
  opacity: 0,
  delay: 1,
  y: 20,
  ease: "power2.out",
});
gsap.from("#start_action", {
  opacity: 0,
  delay: 1.2,
  y: 20,
  ease: "power2.out",
});
gsap.from(".star1", {
  delay: 2.3,
  opacity: 0,
  x: -20,
  rotate: 90,
  ease: "power2.out"
});
gsap.from(".star2", {
  delay: 2.5,
  opacity: 0,
  x: 20,
  y: 20,
  rotate: -60,
  ease: "power2.out",
});

gsap.to("#hero-core", {
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "80% top",
    scrub: true,
    toggleActions: "play none play none"
  },
  height: "40vh",
  width: "90vw",
  ease: "power2.out"
});

/* Propos : lines */
/* Propos : lines animation */
const lines = [".lineh1", ".lineh2", ".linev1", ".linev2", ".linev3"];

lines.forEach((line, index) => {
  gsap.to(line, {
    scrollTrigger: {
      trigger: "#propos",
      start: "top 60%",
      toggleActions: "play none none none"
    },
    onStart: () => {
      document.querySelector(line).style.animation = `drawLine 0.5s ease forwards`;
      document.querySelector(line).style.animationDelay = `${index * 0.2}s`;
    },
    ease: "elastic.out(1,0.75)",
  });
});

const floatingCards = document.querySelectorAll(".floating-card");

floatingCards.forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 125%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    delay: index * 0.2,
    ease: "elastic.out(1,0.75)",
    y: 50
  });
});

const sectionarticles = document.getElementById("section-article");
const articles = sectionarticles.querySelectorAll(".article");

articles.forEach((article, index) => {
  gsap.from(article, {
    scrollTrigger: {
      trigger: sectionarticles,
      start: "top 130%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    delay: 0.5 * index,
    duration: 1.5,
    ease: "elastic.out(1,0.75)",
    y: 50,
  });
});

const sectiontitles = document.querySelectorAll(".title-h3");

sectiontitles.forEach((section, index) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 150%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    ease: "elastic.out(0.1,0.75)",
    y: 100,
  });
});

const obj = document.querySelector('object');
obj.addEventListener('load', () => {
  const svgDoc = obj.contentDocument;
  const shape = svgDoc.querySelector('.flower');
  shape.setAttribute('fill', 'blue');
});

const stickers = document.querySelectorAll(".stickers");
stickers.forEach(sticker => {
  gsap.from(sticker, {
    opacity: 0
  });
});