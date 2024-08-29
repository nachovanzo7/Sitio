document.addEventListener("DOMContentLoaded", function() {
    const textLeft = " ";
    const textRight = " ";
    
    // Asignación de textos con efecto de máquina de escribir
    typeWriter(document.getElementById("text-left"), textLeft, 0);
    typeWriter(document.getElementById("text-right"), textRight, 0);

    // Animación de aparición de botones
    document.querySelectorAll('.circular-button').forEach((button, index) => {
        setTimeout(() => {
            button.style.transform = 'scale(1)';
            button.style.opacity = '1';
        }, index * 300);
    });

    // Reproducción de sonido al hacer clic
    document.querySelectorAll('.circular-button').forEach(button => {
        button.addEventListener('click', (event) => {
            document.getElementById('click-sound').play();
            // Determinar la imagen a mostrar según el botón clickeado
            const buttonId = event.currentTarget.id;
            const imageSrc = buttonId === 'button-left' ? 'REDEESTA.jpg' : 'casa.jpg';
            showImage(imageSrc);
        });
    });

    // Ocultar la imagen en pantalla completa al hacer clic en ella
    document.getElementById('fullscreen-image').addEventListener('click', () => {
        document.getElementById('fullscreen-image').style.display = 'none';
    });
});

// Función para mostrar la imagen a pantalla completa
function showImage(imageSrc) {
    const fullscreenImage = document.getElementById('fullscreen-image');
    const fullscreenImg = document.getElementById('fullscreen-img');
    fullscreenImg.src = imageSrc;
    fullscreenImage.style.display = 'flex';
}

// Función para el efecto de máquina de escribir
function typeWriter(element, text, i) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        element.style.opacity = '1';
        setTimeout(() => typeWriter(element, text, i + 1), 100);
    }
}