gsap.to("#hero-core", {
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "90% top",
    scrub: 1,
    toggleActions: "play none play none"
  },
  height: "70vh",
  ease: "power2.out"
});

gsap.to(".stickers", {
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "90% top",
    scrub: 1,
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
  ease: "none"
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
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    target = Math.max(0, Math.min(maxScroll, target + e.deltaY));
    if (!raf) raf = requestAnimationFrame(tick);
  }, { passive: false });

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
      const innerFooter = footer.querySelector("footer");
      const footerHeight = innerFooter ? innerFooter.offsetHeight : footer.offsetHeight;
      mainContent.style.marginBottom = footerHeight + "px";
    };
    
    updateFooterReveal();
    window.addEventListener("resize", updateFooterReveal);
  }
});

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".reveal-text").forEach((textEl) => {
    function wrapWords(el) {
      const childNodes = Array.from(el.childNodes);
      el.innerHTML = '';
      childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          const words = node.textContent.split(/(\s+)/);
          words.forEach(word => {
            if (word.trim() !== '') {
              const span = document.createElement('span');
              span.textContent = word;
              span.style.opacity = '0.2';
              el.appendChild(span);
            } else {
              el.appendChild(document.createTextNode(word));
            }
          });
        } else {
          const clone = node.cloneNode(true);
          if (clone.nodeType === Node.ELEMENT_NODE && clone.tagName !== 'BR') {
            wrapWords(clone);
          }
          el.appendChild(clone);
        }
      });
    }

    wrapWords(textEl);
    const spans = textEl.querySelectorAll("span");

    gsap.to(spans, {
      scrollTrigger: {
        trigger: textEl,
        start: "top 75%",end: "bottom 60%",scrub: 1,
      },
      opacity: 1,
      stagger: 0.1,
      ease: "none"
    });
  });

    const navProjects = document.querySelectorAll(".nav-project");
    navProjects.forEach(nav => {
      const cursor = nav.querySelector(".nav-cursor");
      if (cursor) {
        const leftTo = gsap.quickTo(cursor, "left", { duration: 0.4, ease: "power3" });
        const topTo = gsap.quickTo(cursor, "top", { duration: 0.4, ease: "power3" });
        nav.addEventListener("mousemove", (e) => {
          leftTo(e.clientX);
          topTo(e.clientY);
        });
      }
    });
});