document.addEventListener('DOMContentLoaded', function() {
    
    let slides = document.querySelectorAll('.slide');
    let index = 0;

    function showSlide() {
        // Oculta todos los slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Muestra el slide actual
        slides[index].classList.add('active');
        
        // Avanza al siguiente slide y reinicia si es el último
        index = (index + 1) % slides.length;
    }

    // Inicia el carrusel
    setInterval(showSlide, 4000); // cambia cada 4 segundos
});