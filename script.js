const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

let scale = 1;

// Función para aumentar el tamaño del botón SÍ
function growYesButton() {
    scale += 0.2; // Aumenta el tamaño un 20% cada vez
    yesBtn.style.transform = `scale(${scale})`;
    
    // Si el botón ya es muy grande, empezamos a ocultar el botón "No"
    if (scale > 3) {
        noBtn.style.opacity = '0';
        noBtn.style.pointerEvents = 'none'; // Desactiva el botón No
    }
}

// Iniciar el crecimiento automático al cargar la página
const growthInterval = setInterval(growYesButton, 600);

// Si hace clic en el botón SÍ
yesBtn.addEventListener('click', () => {
    clearInterval(growthInterval); // Detener el crecimiento
    alert('¡Siii! Sabía que me perdonarías. Te amo demasiado, prometo portarme mejor. 🥰');
    
    // Opcional: Redirigir a una foto juntos o un video
    // window.location.href = "tu_enlace_aqui";
});

// Si intenta presionar el botón NO
noBtn.addEventListener('click', () => {
    scale += 1.5; // El botón SÍ crece de golpe para tapar todo
    yesBtn.style.transform = `scale(${scale})`;
    alert('Esa opción está desactivada temporalmente... ¡Dale al botón verde! 😋');
});
