document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Functionality for the "Começar a Explorar" button
    const exploreButton = document.querySelector('.btn-explore');
    if (exploreButton) {
        exploreButton.addEventListener('click', () => {
            // Scroll to the "Personagens em Destaque" section
            const featuredCharactersSection = document.getElementById('personagens');
            if (featuredCharactersSection) {
                featuredCharactersSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // Hamburger menu functionality (optional, but good to include if you have a hamburger menu)
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });
    }
});