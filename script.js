document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for internal navigation links
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
            const featuredCharactersSection = document.getElementById('personagens');
            if (featuredCharactersSection) {
                featuredCharactersSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // Functionality for character cards
    const characterCards = document.querySelectorAll('.card');
    characterCards.forEach(card => {
        card.addEventListener('click', () => {
            const characterName = card.querySelector('h4').textContent;
            const characterDescription = card.querySelector('p').textContent;

            // Display character information in an alert
            alert(`Você clicou em ${characterName}!\n\nDetalhes: ${characterDescription}`);
            
            // You could also imagine more complex interactions here, like:
            // - Opening a modal with more detailed information
            // - Navigating to a dedicated character page
            // - Highlighting the clicked card
        });
    });

    // Hamburger menu functionality (for mobile navigation)
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });
    }
});