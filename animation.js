

gsap.to("#hero-core", {
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "90% top",
    scrub: true,
    toggleActions: "play none play none"
  },
  height: "70%",
  ease: "power2.out"
});

gsap.to(".hero-projets", {
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "90% top",
    scrub: true,
    toggleActions: "play none play none"
  },
  height: "10%",
  ease: "power2.out"
});


gsap.to(".stickers", {
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "90% top",
    scrub: true,
    toggleActions: "play none play none"
  },
  scale: "0.95",
  ease: "power2.out"
});


function blinkRandomly() {
    gsap.to(".stick-oeil", {
      scaleY: 0.1,
      transformOrigin: "center",
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
      onComplete: () => {
        gsap.delayedCall(Math.random() * 4 + 2, blinkRandomly);
      }
    });
  }
function moveEyeRandomly() {
  gsap.to(".stick-oeil", {
    x: () => gsap.utils.random(-2, 2),
    y: () => gsap.utils.random(-2, 2),
    duration: 0.3,
    ease: "power1.inOut",
    onComplete: () => {
      gsap.delayedCall(Math.random() * 3 + 1, moveEyeRandomly);
    }
  });
}
moveEyeRandomly();
blinkRandomly();

gsap.to(".moulin", {
  rotation: 360,
  transformOrigin: "center",
  duration: 12,
  repeat: -1,
  ease: "power1.inOut"
});

(function () {
  const ease = 0.1;

  let current = window.scrollY;
  let target = window.scrollY;
  let raf = null;

  function tick() {
    current += (target - current) * ease;

    if (Math.abs(target - current) < 0.1) {
      current = target;
      window.scrollTo(0, current);
      raf = null;
      return;
    }

    window.scrollTo(0, current);
    raf = requestAnimationFrame(tick);
  }

  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    // Utilisation de documentElement pour une hauteur absolue beaucoup plus précise
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    target = Math.max(0, Math.min(maxScroll, target + e.deltaY));
    if (!raf) raf = requestAnimationFrame(tick);
  }, { passive: false });

  // Synchronise le scroll si l'utilisateur utilise la barre de navigation ou le tactile
  window.addEventListener('scroll', () => {
    if (!raf) {
      current = window.scrollY;
      target = window.scrollY;
    }
  });

})();

window.addEventListener("load", () => {
  const footer = document.querySelector("site-footer");
  const mainContent = document.querySelector(".page-content");
  
  if (footer && mainContent) {
    const updateFooterReveal = () => {
      // Cible la balise <footer> à l'intérieur du web component pour une hauteur parfaite
      const innerFooter = footer.querySelector("footer");
      const footerHeight = innerFooter ? innerFooter.offsetHeight : footer.offsetHeight;
      mainContent.style.marginBottom = footerHeight + "px";
    };
    
    updateFooterReveal();
    window.addEventListener("resize", updateFooterReveal);
  }
});