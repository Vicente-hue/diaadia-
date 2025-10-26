document.addEventListener('DOMContentLoaded', () => {
    const confettiContainer = document.getElementById('confetti-container');
    const numConfetti = 50; // Cantidad de partículas

    const colors = ['#ffffff', '#ff007f', '#ffcc00', '#00e6e6']; // Colores de las partículas

    for (let i = 0; i < numConfetti; i++) {
        createConfetti();
    }

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Posición y tamaño aleatorios
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duración entre 2s y 5s
        confetti.style.animationDelay = Math.random() * 5 + 's'; // Retraso para que caigan escalonadamente

        confettiContainer.appendChild(confetti);
        
        // Quita la partícula después de la animación para no sobrecargar el DOM
        confetti.addEventListener('animationend', () => {
            confetti.remove();
            createConfetti(); // Crea una nueva para mantener el flujo constante
        });
    }
});
