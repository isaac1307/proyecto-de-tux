// contacto.js - Validación del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactoForm = document.querySelector('.formulario-contacto');
    
    if (contactoForm) {
        contactoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const asunto = document.getElementById('asunto').value;
            const mensaje = document.getElementById('mensaje').value;
            
            if (!nombre || !email || !asunto || !mensaje) {
                alert('Por favor, completa todos los campos requeridos.');
                return;
            }
            
            // Validación de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingresa un correo electrónico válido.');
                return;
            }
            
            // Simulación de envío
            const enviarBtn = this.querySelector('.enviar-btn');
            const originalText = enviarBtn.textContent;
            
            enviarBtn.textContent = 'Enviando...';
            enviarBtn.disabled = true;
            
            setTimeout(() => {
                alert('¡Mensaje enviado exitosamente! Te contactaremos pronto.');
                contactoForm.reset();
                enviarBtn.textContent = originalText;
                enviarBtn.disabled = false;
            }, 2000);
        });
    }

    // Smooth scroll para enlaces internos
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
});