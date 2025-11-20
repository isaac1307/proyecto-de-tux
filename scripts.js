// --- Lógica del Slider (slider.js) ---
let slideIndex = 1;
let slideInterval;

// Inicia el slider al cargar
document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);
  startSlideShow();
});

function startSlideShow() {
  // Detiene el intervalo anterior si existe
  if (slideInterval) {
    clearInterval(slideInterval);
  }
  // Inicia un nuevo intervalo
  slideInterval = setInterval(() => {
    nextSlide();
  }, 5000); // Cambia cada 5 segundos
}

function nextSlide() {
  showSlides(slideIndex += 1);
  startSlideShow(); // Reinicia el timer
}

function prevSlide() {
  showSlides(slideIndex -= 1);
  startSlideShow(); // Reinicia el timer
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  startSlideShow(); // Reinicia el timer
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideItem");
  let dots = document.getElementsByClassName("dot");
  
  // Asegurarse de que slides y dots existen antes de usarlos
  if (slides.length === 0 || dots.length === 0) {
    return; // Salir si no hay elementos
  }
  
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  
  // Oculta todos los slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
    slides[i].classList.remove("active");
  }
  
  // Desactiva todos los dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Muestra el slide actual y activa el dot correspondiente
  slides[slideIndex - 1].style.opacity = "1";
  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].className += " active";
}


// --- Lógica de las Cards (cards.js) ---

// Datos de las cards (actualizados para la incubadora)
var cardsData = {
  1: {
    title: "Asesoría de Negocios",
    image: "https://placehold.co/400x250/073da2/ffffff?text=Asesor%C3%ADa",
    description: "Ofrecemos asesoría especializada para desarrollar y validar tu modelo de negocio. Te guiamos en la creación de tu plan financiero, estrategias de marketing digital, aspectos legales y contables para asegurar una base sólida para tu empresa."
  },
  2: {
    title: "Capacitación y Talleres",
    image: "https://placehold.co/400x250/06863d/ffffff?text=Capacitaci%C3%B3n",
    description: "Accede a un programa continuo de capacitación con talleres, seminarios y conferencias impartidos por expertos en áreas clave como ventas, tecnología, innovación, propiedad intelectual y habilidades directivas. Mantente actualizado y competitivo."
  },
  3: {
    title: "Espacio de Coworking",
    image: "https://placehold.co/400x250/ccff00/000000?text=Coworking",
    description: "Te brindamos un espacio de trabajo moderno y colaborativo. Nuestras instalaciones incluyen acceso a oficinas amuebladas, salas de juntas equipadas, internet de alta velocidad y áreas comunes para fomentar el networking y la sinergia."
  },
  4: {
    title: "Vinculación Estratégica",
    image: "https://placehold.co/400x250/555555/ffffff?text=Vinculaci%C3%B3n",
    description: "Te conectamos con nuestra amplia red de contactos que incluye mentores experimentados, potenciales inversionistas ángeles, fondos de capital de riesgo y otras empresas del sector. La vinculación es clave para el crecimiento."
  },
  5: {
    title: "Desarrollo de Prototipos",
    image: "https://placehold.co/400x250/aa3377/ffffff?text=Prototipos",
    description: "Si tu proyecto es de base tecnológica, te apoyamos en el desarrollo de tu Producto Mínimo Viable (MVP). Contamos con acceso a laboratorios y herramientas para que puedas crear, probar y validar tu prototipo antes de lanzarlo al mercado."
  },
  6: {
    title: "Gestión de Fondos",
    image: "https://placehold.co/400x250/ff8800/ffffff?text=Fondos",
    description: "El financiamiento es vital. Te asesoramos en la identificación y aplicación a convocatorias de fondos públicos (como INADEM, CONACYT) y privados. Te ayudamos a preparar tu 'pitch' y a estructurar tu solicitud para maximizar tus posibilidades de éxito."
  }
};

function expandCard(cardNumber) {
  var modal = document.getElementById("cardModal");
  var cardData = cardsData[cardNumber];
  
  if (cardData && modal) {
    document.getElementById("modalImg").src = cardData.image;
    document.getElementById("modalImg").alt = cardData.title;
    document.getElementById("modalTitle").textContent = cardData.title;
    document.getElementById("modalDescription").textContent = cardData.description;
    
    modal.classList.add("show");
    document.body.style.overflow = "hidden"; // Previene scroll del body cuando el modal está abierto
  }
}

function closeCard() {
  var modal = document.getElementById("cardModal");
  if (modal) {
    modal.classList.remove("show");
    document.body.style.overflow = "auto"; // Restaura el scroll del body
  }
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
  var modal = document.getElementById("cardModal");
  if (event.target == modal) {
    closeCard();
  }
}

// Cerrar modal con la tecla ESC
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    var modal = document.getElementById("cardModal");
    if (modal && modal.classList.contains("show")) {
      closeCard();
    }
  }
});