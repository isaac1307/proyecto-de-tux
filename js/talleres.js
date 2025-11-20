// talleres.js - Filtrado y funcionalidad para la página de talleres
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filtro-btn');
    const tallerCards = document.querySelectorAll('.taller-card');
    
    // Filtrado por categoría
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            const categoria = this.dataset.categoria;
            
            // Filtrar talleres
            tallerCards.forEach(card => {
                if (categoria === 'todos' || card.dataset.categoria === categoria) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Animación inicial de las tarjetas
    tallerCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });

    // Efecto hover para los beneficios
    const beneficios = document.querySelectorAll('.beneficio');
    beneficios.forEach(beneficio => {
        beneficio.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        beneficio.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});