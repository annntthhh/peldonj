const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

// Hacer que el botón "No" se mueva cuando intente clickearlo
noBtn.addEventListener('mouseover', function () {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// Acción cuando le dé al "Sí"
yesBtn.addEventListener('click', () => {
    alert('¡Sabía que dirías que sí! Te amo muchísimo, gracias por aguantar mis berrinches. 🌹✨');
    location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // O el link a "su canción"
});
