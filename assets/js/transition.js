(function initTransition() {
    const transitionContainer = document.createElement("div");
    transitionContainer.classList.add("page-transition");
    
    const layer1 = document.createElement("div");
    layer1.classList.add("transition-layer", "layer-1");
    
    const layer2 = document.createElement("div");
    layer2.classList.add("transition-layer", "layer-2");
    
    const layer3 = document.createElement("div");
    layer3.classList.add("transition-layer", "layer-3");

    const logoWrapper = document.createElement("div");
    logoWrapper.classList.add("transition-logo");

    transitionContainer.appendChild(layer3);
    transitionContainer.appendChild(layer2);
    transitionContainer.appendChild(layer1);
    transitionContainer.appendChild(logoWrapper);
    document.body.appendChild(transitionContainer);

    let isInternalNav = false;
    
    try {
        isInternalNav = sessionStorage.getItem("isInternalNav") === "true";
        sessionStorage.removeItem("isInternalNav");
    } catch (err) {
        if (document.referrer && window.location.origin !== "null") {
            isInternalNav = document.referrer.startsWith(window.location.origin);
        }
    }
    
    const navEntries = performance.getEntriesByType("navigation");
    if (navEntries.length > 0 && navEntries[0].type === "reload") {
        isInternalNav = false;
    }

    if (isInternalNav) {
        gsap.set([layer1, layer2, layer3], { yPercent: 0 });
        gsap.set(logoWrapper, { opacity: 1, scale: 1 });
        
        gsap.to(logoWrapper, {
            opacity: 0,
            scale: 0.8,
            duration: 0.25,
            ease: "power2.inOut"
        });
        
        gsap.to([layer3, layer2, layer1], {
            yPercent: -100,
            duration: 0.55, 
            stagger: 0.06, 
            ease: "power3.inOut",
            delay: 0.1,
            onComplete: () => {
                transitionContainer.style.display = "none"; // Cache complètement le conteneur une fois fini
            }
        });
    } else {
        // Cache directement les calques de transition sans animation
        transitionContainer.style.display = "none";
        gsap.set([layer1, layer2, layer3], { yPercent: -100 });
        gsap.set(logoWrapper, { opacity: 0 });
    }

    // 3. Interception de tous les clics sur la page (Délégation d'événement)
    document.addEventListener("click", function(e) {
        // Remonte à la balise <a> la plus proche du clic
        const link = e.target.closest("a");
        
        if (!link) return;

        // Permettre l'ouverture dans un nouvel onglet avec CMD/CTRL
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) {
            return;
        }

        const targetUrl = link.getAttribute("href");
        
        // Exclure les liens inactifs ou les cibles spéciales
        if (!targetUrl || link.getAttribute("target") === "_blank" || targetUrl.startsWith("mailto:") || targetUrl.startsWith("tel:")) {
            return;
        }

        try {
            const destination = new URL(link.href);

            // Bloquer la transition si on navigue vers une page EXACTEMENT identique (évite l'écran bloqué)
            if (destination.pathname === window.location.pathname) {
                return;
            }
            
            // Bloquer la transition si c'est un lien vers un autre site web (externe)
            if (destination.origin !== window.location.origin) {
                return;
            }
        } catch (err) {
            return; // Sécurité en cas d'URL étrange
        }

        e.preventDefault();
        transitionContainer.style.display = "flex"; // Réaffiche le conteneur
        transitionContainer.style.pointerEvents = "all"; // Empêche l'utilisateur de cliquer 2 fois

        // 4. Animation d'arrivée : On superpose d'abord le Fluo, puis le Vert, puis le Noir
        gsap.fromTo([layer1, layer2, layer3], 
            { yPercent: 100 },
            {
                yPercent: 0,
                duration: 0.55, 
                stagger: 0.06,  
                ease: "power3.inOut",
                onComplete: () => {
                    try { 
                        sessionStorage.setItem("isInternalNav", "true"); 
                    } catch (e) {}
                    window.location.href = targetUrl;
                }
            }
        );
        
        gsap.fromTo(logoWrapper,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.3, delay: 0.3, ease: "back.out(1.5)" }
        );
    });

    window.addEventListener("pageshow", (event) => {
        if (event.persisted) {
            transitionContainer.style.display = "none";
            transitionContainer.style.pointerEvents = "none";
            gsap.set([layer1, layer2, layer3], { yPercent: -100 });
            gsap.set(logoWrapper, { opacity: 0 });
        }
    });
})();