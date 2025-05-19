<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maxime Melan</title>
    <link rel="stylesheet" href="style.css"><link rel="stylesheet" href="https://use.typekit.net/jlg5shc.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
</head>
<body>
    <div id="hero">
        <div id="hero-core">
            <div id="hero-title">
                <img src="ressources/star.svg" alt="star" class="hero-star star1">
                <img src="ressources/star.svg" al="star" class="hero-star star2">
                <p class="hero-subtitle">Bienvenue sur mon portfolio</p>
                <h1 class="hero-bigtitle">Le <span class="hero-design">design</span>, c’est mon terrain de jeu. Moi, c’est <span class="hero-name">Maxime</span></Maxime></h1>
                <a id="start_action" class="button">Découvrir</a>
            </div>
            <img src="ressources/hero-dot.svg" id="hero-dot">
        </div>
    </div>

    <section id="propos">
        <div class="lines">
            <svg class="lineh1" xmlns="http://www.w3.org/2000/svg" width="100vw" height="3" viewBox="0 0 1920 3" fill="none"><path d="M2015.5 1H-104" stroke="#1B1916" stroke-opacity="0.2"/></svg>
            <svg class="lineh2" xmlns="http://www.w3.org/2000/svg" width="100vw" height="3" viewBox="0 0 1920 3" fill="none"><path d="M2015.5 1H-104" stroke="#1B1916" stroke-opacity="0.2"/></svg>
            <svg class="linev1" xmlns="http://www.w3.org/2000/svg" width="3" height="1133" viewBox="0 0 3 1133" fill="none"><path d="M1 -48V1142.5" stroke="#1B1916" stroke-opacity="0.2"/></svg>
            <svg class="linev2" xmlns="http://www.w3.org/2000/svg" width="3" height="1012" viewBox="0 0 3 1012" fill="none"><path d="M1 0V1046.5" stroke="#1B1916" stroke-opacity="0.2"/></svg>
            <svg class="linev3" xmlns="http://www.w3.org/2000/svg" width="3" height="1020" viewBox="0 0 3 1020" fill="none"><path d="M1 1019.5V0" stroke="#1B1916" stroke-opacity="0.2"/></svg>
        </div>
        <div class="canva">
            <div class="floating-card profil">
                <img class="image"src="ressources/photo-profil.svg">
            </div>
            <div class="floating-card frame">
                <img src="ressources/frame.png">
            </div>
            <div class="floating-card passion">
                <svg class="floating-card float-star" xmlns="http://www.w3.org/2000/svg" width="95" height="96" viewBox="0 0 95 96" fill="none">
                    <path d="M95 41.1449H63.8823L85.8857 18.911L76.2899 9.20977L54.2864 31.4485V0H40.7136V31.4485L18.7102 9.20977L9.11442 18.911L31.1178 41.1449H0V54.855H31.1178L9.11442 77.0938L18.7102 86.7901L40.7136 64.5562V96H54.2864V64.5562L76.2899 86.7901L85.8857 77.0938L63.8823 54.855H95V41.1449Z" fill="#7589F9"/>
                </svg>
                <p>Le design n’est pas juste un domaine que j’étudie, c’est une vraie <b>passion</b>. J’aime chercher l’équilibre entre esthétique et utilité, m’inspirer du monde qui m’entoure, et créer des expériences qui ont un vrai sens.</p>
            </div>
            <div class="floating-card search">
                <img src="ressources/icon/search.svg">
                <p class="search-texte">Alternance webdesign 2025-2026 |</p>
            </div>
        </div>
    </section>

    <div class="section-title"><h3 class="title-h3">Mes réalisations</h3></div>
    <section id="section-article">
        <div class="article">
            <img src="ressources/macao.svg"  class="illustration" alt="">
            <h3>Association MACAO</h3>
            <ul>
                <li>Maquette</li>
                <li>Site Web</li>
                <li>Design</li>
                <li>Gestion</li>
                <li>Communication</li>
            </ul>
            <p class="description">
                Pendant une semaine, nous avons revisité l’ensemble d’une charte graphique, les interfaces web et le plan de communication d’une association de notre choix.
            </p>
            <a class="button fill">
                <p>Voir plus</p>
                <img src="ressources/cta/Vector.svg">
            </a>
        </div>
        <div class="article">
            <img src="ressources/podcar.svg" class="illustration" alt="">
            <h3>PodCar</h3>
            <ul>
                <li>Marketing</li>
                <li>Communication</li>
                <li>Design</li>
                <li>Developpement</li>
            </ul>
            <p class="description">
                Podcar est un projet de partiel. C’est une application proposant des podcasts géolocalisés et personnalisés sur l'histoire des lieux qui nous entourent lors de nos balades.
            </p>
            <a class="button fill">
                <p>Voir plus</p>
                <img src="ressources/cta/Vector.svg">
            </a>
        </div>
        <div class="article">
            <img src="ressources/e-commerce.svg" class="illustration" alt="">
            <h3>Maquette e-commerce</h3>
            <ul>
                <li>Marketing</li>
                <li>Communication</li>
                <li>Design</li>
                <li>Developpement</li>
            </ul>
            <p class="description">
                Réalisation d’une maquette de site web et d’une application mobile sur le thème du sport. La maquette a été réalisée sur Figma et entièrement prototypée.
            </p>
            <a href="e-commerce.html" class="button fill">
                <p>Voir plus</p>
                <img src="ressources/cta/Vector.svg">
            </a>
        </div>
    </section>

    <footer>
        <div class="contact">
            <h3>Tu veux <span class="contact-disc">discuter</span> ? Parfait, j’adore les bonnes <span class="contact-conv">conversations</span>.</h3>
            <div class="buttons">
                <a href="tel:0781688761"class="button stroke">
                    <p data-default="Téléphone" data-hover="07 81 68 87 61">Téléphone</p>
                    <img src="ressources/cta/Vector.svg">
                </a>
                <a href="mailto:melan.maxime@laposte.net"  class="button stroke">
                    <p data-default="Email" data-hover="maxime.melan@laposte.net">Email</p>
                    <img src="ressources/cta/Vector.svg">
                </a>
            </div>
        </div>
        <div class="links">
            <div>
                <h4>Mes réseaux</h4>
                <a href="https://www.instagram.com/anoxyme.off/"><img src="ressources/icon/insta.svg">Découvrez mes projets visuels.</a>
                <p><img src="ressources/icon/x.svg">Suivez mes actualités.</p>
                <a href="https://www.linkedin.com/in/maxime-melan"><img src="ressources/icon/linkdin.svg">Connectez-vous avec moi.</a>
            </div>
            <div>
                <h4>Mes projets</h4>
                <a>Association Macao</a>
                <a>Podcar</a>
                <a>Maquette e-commerce</a>
            </div>
            <div>
                <h4>Mes ressources</h4>
                <a href="ressources/CV 2025 - MELAN Maxime.pdf"><img src="ressources/icon/doc.svg">Mon Curriculum vitae</a>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollToPlugin.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js"></script>

    <script src="animation.js"></script>
    <script src="script.js"></script>
</body>
</html>