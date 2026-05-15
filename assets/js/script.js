document.addEventListener('DOMContentLoaded', async () => {
    if (typeof gsap === 'undefined') return;

    const base = window.location.pathname.includes('/projets/') ? '../' : './';
    let allProjects = [];
    try {
        const response = await fetch(`${base}projets.json`);
        if (!response.ok) throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        allProjects = await response.json();
    } catch (error) {
        console.error("Impossible de charger les données des projets depuis projets.json:", error);
    }

    const projectsContainer = document.getElementById('dynamic-projects-list');
    if (projectsContainer) {
        let html = '';
        allProjects.forEach(projet => {
            const cleanLink = projet.lien.replace(/^\.\//, '');
            const cleanImage = projet.image.replace(/^\.\//, '');
            const pastillesHtml = projet.categories.map(cat => `<li>${cat}</li>`).join('');
            html += `
            <li class="article">
                <article>
                    <a href="${base}${cleanLink}" aria-label="Découvrir le projet : ${projet.titre}">
                        <div class="image-articles">
                            <img src="${base}${cleanImage}" alt="${projet.titre}" width="600" height="400" loading="lazy" decoding="async">
                        </div>
                    </a>
                    <ul class="pastilles" aria-label="Catégories" style="--link-color: var(--green);">
                        ${pastillesHtml}
                    </ul>
                    <h3>
                        <a href="${base}${cleanLink}">${projet.titre}</a>
                    </h3>
                </article>
            </li>`;
        });
        projectsContainer.innerHTML = html;
    }

    const homeProjectsContainer = document.getElementById('dynamic-projects-list-home');
    if (homeProjectsContainer && allProjects.length > 0) {
        const shuffledHomeProjects = [...allProjects].sort(() => 0.5 - Math.random()).slice(0, 3);
        
        let html = '';
        shuffledHomeProjects.forEach(projet => {
            const cleanLink = projet.lien.replace(/^\.\//, '');
            const cleanImage = projet.image.replace(/^\.\//, '');
            const pastillesHtml = projet.categories.map(cat => `<li>${cat}</li>`).join('');
            html += `
            <li class="article">
                <article>
                    <a href="${base}${cleanLink}" class="card-link" aria-label="Découvrir le projet : ${projet.titre}">
                        <div class="image-articles">
                            <img src="${base}${cleanImage}" alt="${projet.titre}" width="600" height="400" loading="lazy" decoding="async">
                        </div>
                    </a>
                    <ul class="pastilles" aria-label="Catégories" style="--link-color: var(--black);">
                        ${pastillesHtml}
                    </ul>
                    <h3>${projet.titre}</h3>
                </article>
            </li>`;
        });
        homeProjectsContainer.innerHTML = html;
    }

    function initializeProjectCursor() {
        const projectImageContainers = document.querySelectorAll('li.article article');
        if (projectImageContainers.length === 0) return;

        let customCursor = document.querySelector('.custom-cursor');
        if (!customCursor) {
            customCursor = document.createElement('div');
            customCursor.className = 'custom-cursor';
            document.body.appendChild(customCursor);
        }

        gsap.set(customCursor, { xPercent: -50, yPercent: -50, scale: 0, opacity: 0 });
        const xToCursor = gsap.quickTo(customCursor, "x", { duration: 0.4, ease: "power3" });
        const yToCursor = gsap.quickTo(customCursor, "y", { duration: 0.4, ease: "power3" });

        if (!window.cursorMouseMoveListener) {
            window.cursorMouseMoveListener = (e) => {
                if (xToCursor && yToCursor) {
                    xToCursor(e.clientX);
                    yToCursor(e.clientY);
                }
            };
            window.addEventListener("mousemove", window.cursorMouseMoveListener);
        }

        projectImageContainers.forEach(el => {
            el.addEventListener("mouseenter", () => {
                gsap.to(customCursor, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.5)" });
            });
            el.addEventListener("mouseleave", () => {
                gsap.to(customCursor, { scale: 0, opacity: 0, duration: 0.2, ease: "power2.in" });
            });
        });
    }
    initializeProjectCursor();

    const projectNavigation = document.querySelector('.project-navigation');
    if (projectNavigation && allProjects.length > 0) {
        const currentFilename = window.location.pathname.split('/').pop();
        const otherProjects = allProjects.filter(p => p.lien.split('/').pop() !== currentFilename);

        if (otherProjects.length > 1) {
            const shuffledProjects = otherProjects.sort(() => 0.5 - Math.random());

            const prevLink = projectNavigation.querySelector('.nav-prev');
            const nextLink = projectNavigation.querySelector('.nav-next');

            const prevProject = shuffledProjects[0];
            const cleanPrevLink = prevProject.lien.replace(/^\.\//, '');
            prevLink.href = `${base}${cleanPrevLink}`;
            prevLink.querySelector('.nav-title').textContent = prevProject.titre_court || prevProject.titre;
            prevLink.setAttribute('aria-label', `Voir le projet : ${prevProject.titre}`);

            const nextProject = shuffledProjects[1];
            const cleanNextLink = nextProject.lien.replace(/^\.\//, '');
            nextLink.href = `${base}${cleanNextLink}`;
            nextLink.querySelector('.nav-title').textContent = nextProject.titre_court || nextProject.titre;
            nextLink.setAttribute('aria-label', `Voir le projet : ${nextProject.titre}`);
        } else {
            projectNavigation.style.display = 'none';
        }
    }

    document.querySelectorAll('.contact-hero-btn p').forEach(p => {
        const defaultText = p.dataset.default;
        const hoverText   = p.dataset.hover;
        p.parentElement.addEventListener('mouseenter', () => { p.textContent = hoverText; });
        p.parentElement.addEventListener('mouseleave', () => { p.textContent = defaultText; });
    });

    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Envoi en cours...';
            submitBtn.style.opacity = '0.7';
            submitBtn.disabled = true;
            formStatus.style.display = 'none';

            const formData = new FormData(contactForm);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                const data = await response.json();

                if (data.success) {
                    formStatus.innerHTML = '<strong>C\'est dans la boîte !</strong><br>Message envoyé avec succès. Je te réponds très vite.';
                    formStatus.className = 'form-status-message form-status-success';
                    formStatus.style.display = 'block';
                    contactForm.reset();
                } else {
                    throw new Error("Erreur API");
                }
            } catch (error) {
                formStatus.innerHTML = '<strong>Oups, petit souci...</strong><br>Vérifie ta connexion ou contacte-moi directement par mail (melan.maxime@laposte.net).';
                formStatus.className = 'form-status-message form-status-error';
                formStatus.style.display = 'block';
            } finally {
                submitBtn.textContent = originalBtnText;
                submitBtn.style.opacity = '1';
                submitBtn.disabled = false;
            }
        });
    }
});