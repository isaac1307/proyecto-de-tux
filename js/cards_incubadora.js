// Datos de las cards de la Incubadora
const cardsData = {
  1: {
    title: "Innovación",
// ... existing code ... -->
    description: "Ofrecemos acompañamiento técnico y estratégico para el desarrollo de proyectos. Nuestros asesores especializados te ayudarán con el plan financiero, la estrategia legal y fiscal, el desarrollo de software y el diseño industrial."
  }
};

function expandCard(cardNumber) {
  const modal = document.getElementById("cardModal");
  const cardData = cardsData[cardNumber];
  
  if (cardData) {
// ... existing code ... -->
    document.getElementById("modalDescription").textContent = cardData.description;
    
    modal.classList.add("show");
    document.body.style.overflow = "hidden"; // Previene scroll del body cuando el modal está abierto
  }
}

function closeCard() {
  const modal = document.getElementById("cardModal");
  modal.classList.remove("show");
  document.body.style.overflow = "auto"; // Restaura el scroll del body
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
  const modal = document.getElementById("cardModal");
  if (event.target == modal) {
    closeCard();
  }
}

// Cerrar modal con la tecla ESC
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeCard();
  }
});