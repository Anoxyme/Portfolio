class SiteFooter extends HTMLElement {
    connectedCallback() {
        const base = window.location.pathname.includes('/projets/') ? '../' : './';
        this.innerHTML = `
            <footer id="contact">
                <div class="contact">
                    <h3>
                        Tu veux <span class="contact-disc">discuter</span> ? Parfait, j'adore les bonnes <span class="contact-conv">conversations</span>.
                        <img src="${base}assets/images/stickers/star.svg" alt="" class="star-sticker" aria-hidden="true">
                    </h3><div class="buttons">
                        <a href="tel:0781688761" class="button stroke" aria-label="M'appeler par téléphone au 07 81 68 87 61">
                            <p data-default="Téléphone" data-hover="07 81 68 87 61">Téléphone</p>
                        </a>
                        <a href="mailto:melan.maxime@laposte.net" class="button stroke" aria-label="M'envoyer un e-mail à melan.maxime@laposte.net">
                            <p data-default="Email" data-hover="maxime.melan@laposte.net">Email</p>
                        </a>
                    </div>
                </div>

                <div class="links">
                    <div>
                        <h4>Mes réseaux</h4>
                        <a href="https://www.instagram.com/anoxyme.off/" target="_blank">
                            <img src="${base}assets/images/icons/instagram.svg" alt="Instagram">Découvrez mes projets visuels.
                        </a>
                        <a href="https://www.linkedin.com/in/maxime-melan/" target="_blank">
                            <img src="${base}assets/images/icons/linkedin.svg" alt="LinkedIn">Connectez-vous avec moi.
                        </a>
                        <a href="https://www.behance.net/" target="_blank">
                            <img src="${base}assets/images/icons/behance.svg" alt="Behance">Retrouvez mes créations.
                        </a>
                    </div>
                    <div>
                        <h4>Mes projets</h4>
                        <div id="footer-random-projects">
                            <!-- Les 3 projets aléatoires seront injectés ici -->
                        </div>
                    </div>
                    <div>
                        <h4>Mes ressources</h4>
                        <a href="${base}assets/documents/CV-2025-MELAN-Maxime.pdf" target="_blank">
                            <img src="${base}assets/images/icons/doc.svg" alt="">Mon Curriculum vitae
                        </a>
                    </div>
                </div>

                <div class="mentions">
                    © 2026 - Tous droits réservés
                    <a href="${base}mentions-legales.html">Mentions légales</a>
                    <a href="${base}mentions-legales.html">Politique de confidentialité</a>
                </div>
            </footer>
        `;

        // Animation boutons : texte qui swap au hover
        this.querySelectorAll('.button.stroke p').forEach(p => {
            const defaultText = p.dataset.default;
            const hoverText   = p.dataset.hover;

            p.parentElement.addEventListener('mouseenter', () => {
                p.textContent = hoverText;
            });
            p.parentElement.addEventListener('mouseleave', () => {
                p.textContent = defaultText;
            });
        });

        // Chargement des projets aléatoires
        this.loadRandomProjects();
    }

    async loadRandomProjects() {
        try {
            const base = window.location.pathname.includes('/projets/') ? '../' : './';
            const response = await fetch(`${base}projets.json`);
            if (!response.ok) return;
            const allProjects = await response.json();
            
            const currentFilename = window.location.pathname.split('/').pop();
            const filteredProjects = allProjects.filter(p => p.lien.split('/').pop() !== currentFilename);
            
            const shuffled = filteredProjects.sort(() => 0.5 - Math.random()).slice(0, 3);
            const container = this.querySelector('#footer-random-projects');
            
            if (container) {
                container.innerHTML = shuffled.map(p => `<a href="${base}${p.lien.replace(/^\.\//, '')}">${p.titre_court || p.titre}</a>`).join('');
            }
        } catch (error) {
            console.error("Erreur lors du chargement des projets (footer) :", error);
        }
    }
}

customElements.define('site-footer', SiteFooter);