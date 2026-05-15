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

                <div class="footer-logo">
                    <a href="https://maximemelan.fr/" aria-label="Retour à l'accueil">
                        <svg width="377" height="359" viewBox="0 0 377 359" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M377 359H0V0H377V359ZM27 332H350V318.803C349.994 318.788 349.987 318.774 349.98 318.759C349.1 316.557 348.33 314.191 347.67 311.659C345.139 301.203 341.948 290.526 338.096 279.629C334.134 268.732 329.732 258.441 324.891 248.754C320.049 239.068 314.932 230.812 309.539 223.988C308.879 227.29 308.549 231.143 308.549 235.545C308.549 241.269 308.659 247.434 308.879 254.038C308.989 260.532 309.318 267.081 309.869 273.686C310.309 280.179 311.024 286.288 312.015 292.012C313.115 293.993 313.941 295.864 314.491 297.625C315.042 299.276 315.316 300.652 315.316 301.753C315.316 306.376 314.656 309.954 313.336 312.485C312.015 315.016 310.584 316.778 309.044 317.769C307.504 318.649 306.348 319.09 305.578 319.09C303.047 319.09 300.406 318.208 297.654 316.447C294.904 314.576 292.482 310.944 290.392 305.551C283.348 283.977 275.315 265.045 266.292 248.754C257.158 232.464 247.474 219.255 237.24 209.129C235.7 212.101 234.93 215.348 234.93 218.87C234.93 224.044 235.479 229.712 236.58 235.876C237.571 241.93 238.836 247.984 240.376 254.038C241.917 259.981 243.459 265.485 244.999 270.549C246.429 275.501 247.64 279.518 248.631 282.601C250.281 287.884 251.656 292.232 252.757 295.645C253.747 298.947 254.573 301.753 255.233 304.064C255.893 306.266 256.332 308.357 256.553 310.338C256.773 312.32 256.884 314.686 256.884 317.438C256.884 320.85 256.114 323.546 254.573 325.528C252.922 327.509 250.501 328.5 247.31 328.5C243.788 328.5 241.093 327.454 239.222 325.363C237.351 323.162 235.7 320.355 234.27 316.942C232.509 312.1 230.307 306.376 227.667 299.771C225.026 293.057 222.385 285.683 219.744 277.647C217.103 269.612 214.902 261.082 213.142 252.056C211.381 242.921 210.5 233.509 210.5 223.823C210.5 214.688 211.711 207.478 214.132 202.194C216.553 196.911 219.744 193.169 223.705 190.968C227.667 188.656 231.958 187.5 236.58 187.5C240.541 187.5 244.834 189.041 249.456 192.123C254.077 195.205 258.755 199.498 263.486 205.001C268.108 210.504 272.62 216.834 277.021 223.988C281.313 231.143 285.275 238.792 288.906 246.938C288.906 244.076 288.961 241.324 289.07 238.683C289.18 235.931 289.346 233.564 289.566 231.583C290.447 223.548 291.492 217.33 292.702 212.927C293.913 208.524 295.344 205.387 296.994 203.516C298.535 201.535 300.35 200.378 302.441 200.048C304.422 199.608 306.623 199.388 309.044 199.388H309.539C312.62 199.388 316.032 200.984 319.773 204.176C323.405 207.258 327.257 211.495 331.328 216.889C335.289 222.172 339.196 228.171 343.047 234.886C345.428 239.037 347.745 243.293 350 247.654V27H27V332ZM159.272 217.341C172.295 217.341 182.852 227.898 182.852 240.921C182.851 253.943 172.295 264.5 159.272 264.5C172.295 264.5 182.852 275.058 182.852 288.08C182.851 301.102 172.295 311.659 159.272 311.659H67.7275C54.7052 311.659 44.1487 301.102 44.1484 288.08C44.1484 275.058 54.705 264.5 67.7275 264.5C54.7052 264.5 44.1487 253.943 44.1484 240.921C44.1484 227.898 54.705 217.341 67.7275 217.341H159.272ZM87.5527 49.5C88.6571 49.5 89.3601 50.0036 89.7617 51.0107L127.309 152.632L136.746 125.438L162.748 51.0107C163.049 50.0036 163.853 49.5 164.856 49.5H199.693C200.898 49.5001 201.5 50.1043 201.5 51.3125L200.897 120L201.5 188.586C201.5 189.895 200.898 190.5 199.693 190.5H172.787C171.583 190.5 170.88 189.794 170.88 188.586V130.877L171.984 91.2969L137.75 188.989C137.348 189.996 136.645 190.5 135.541 190.5H114.659C113.655 190.5 112.853 189.896 112.451 188.989L74.9033 87.167L76.1084 130.877V188.586C76.1084 189.795 75.4051 190.5 74.3008 190.5H50.3066C49.1022 190.5 48.5 189.895 48.5 188.586L49.2031 120L48.5 51.3125C48.5001 50.1043 49.1023 49.5001 50.3066 49.5H87.5527ZM285.137 93.0371L310.101 66.5225L320.987 78.0889L296.023 104.598H331.328V120.944H296.023L320.987 147.459L310.101 159.02L285.137 132.511V170H269.737V132.511L244.773 159.02L233.887 147.459L258.851 120.944H223.547V104.598H258.851L233.887 78.0889L244.773 66.5225L269.737 93.0371V55.542H285.137V93.0371Z" fill="currentColor"/>
                        </svg>
                    </a>
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