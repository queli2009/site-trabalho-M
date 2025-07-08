document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for all internal navigation links (e.g., #personagens, #filmes)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth' // Smooth scroll animation
            });
        });
    });

    // Functionality for the "Começar a Explorar" button
    const exploreButton = document.querySelector('.btn-explore');
    if (exploreButton) { // Check if the button exists before adding an event listener
        exploreButton.addEventListener('click', () => {
            const featuredCharactersSection = document.getElementById('personagens');
            if (featuredCharactersSection) { // Ensure the target section exists
                featuredCharactersSection.scrollIntoView({
                    behavior: 'smooth' // Smooth scroll to characters section
                });
            }
        });
    }

    // --- NEW / MODIFIED FUNCTIONALITY FOR CHARACTER CARDS ---
    // Define character URLs
    const characterUrls = {
        "Deadpool": "https://www.marvel.com/characters/deadpool",
        "Capitã Marvel": "https://www.marvel.com/characters/captain-marvel-carol-danvers",
        "Pantera Negra": "https://www.marvel.com/characters/black-panther-t-challa"
    };

    const characterCards = document.querySelectorAll('.card');
    characterCards.forEach(card => {
        card.style.cursor = 'pointer'; // Add a pointer cursor to indicate clickability
        card.addEventListener('click', () => {
            const characterName = card.querySelector('h4').textContent; // Get the character name

            // Check if the character name exists in our defined URLs
            if (characterUrls[characterName]) {
                window.open(characterUrls[characterName], '_blank'); // Open URL in a new tab
            } else {
                // Fallback or alert if a URL isn't defined for a character
                alert(`Desculpe, não há um link direto para ${characterName} ainda.`);
            }
        });
    });

    // Hamburger menu functionality for responsive navigation
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });
    }
});