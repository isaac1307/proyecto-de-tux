// espacios.js - Interactividad para la página de espacios
document.addEventListener('DOMContentLoaded', function() {
    // Animación de las tarjetas de espacios
    const espacioCards = document.querySelectorAll('.espacio-card');
    
    espacioCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Smooth scroll para los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Efecto hover mejorado para las características
    const caracteristicas = document.querySelectorAll('.caracteristica');
    caracteristicas.forEach(caracteristica => {
        caracteristica.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        caracteristica.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});