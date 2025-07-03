document.addEventListener('DOMContentLoaded', () => {
    console.log('O site da Marvel foi carregado!');

    // Exemplo de interatividade: Alerta ao clicar no botão "Explorar"
    const exploreButton = document.querySelector('.btn-explore');
    if (exploreButton) {
        exploreButton.addEventListener('click', () => {
            alert('Bem-vindo ao Universo Marvel! Prepare-se para a aventura!');
        });
    }

    // Exemplo de funcionalidade mais avançada (comentado, para você desenvolver):
    // const navLinks = document.querySelectorAll('.main-nav ul li a');
    // navLinks.forEach(link => {
    //     link.addEventListener('click', (event) => {
    //         event.preventDefault(); // Impede o comportamento padrão do link
    //         const sectionName = event.target.textContent;
    //         console.log(`Você clicou em: ${sectionName}`);
    //         // Aqui você poderia carregar conteúdo dinamicamente ou rolar para uma seção
    //     });
    // });
