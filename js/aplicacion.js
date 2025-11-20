// aplicacion.js - Manejo del formulario de aplicación
let currentStep = 1;

function showStep(step) {
    // Ocultar todos los pasos
    document.querySelectorAll('.form-step').forEach(formStep => {
        formStep.classList.remove('active');
    });
    
    // Mostrar el paso actual
    document.getElementById(`step${step}`).classList.add('active');
    
    // Actualizar la barra de progreso
    document.querySelectorAll('.progress-step').forEach(progressStep => {
        progressStep.classList.remove('active');
        if (parseInt(progressStep.dataset.step) <= step) {
            progressStep.classList.add('active');
        }
    });
}

function nextStep(current) {
    // Validar el paso actual antes de avanzar
    if (validateStep(current)) {
        currentStep = current + 1;
        showStep(currentStep);
    }
}

function prevStep(current) {
    currentStep = current - 1;
    showStep(currentStep);
}

function validateStep(step) {
    const currentStepElement = document.getElementById(`step${step}`);
    const inputs = currentStepElement.querySelectorAll('input[required], select[required], textarea[required]');
    
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            input.style.borderColor = '#ccc';
        }
        
        // Validaciones específicas por tipo de campo
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                input.style.borderColor = '#dc3545';
                isValid = false;
            }
        }
        
        if (input.type === 'tel' && input.value) {
            const phoneRegex = /^[0-9+\-\s()]{10,}$/;
            if (!phoneRegex.test(input.value)) {
                input.style.borderColor = '#dc3545';
                isValid = false;
            }
        }
    });
    
    if (!isValid) {
        alert('Por favor, completa todos los campos requeridos correctamente.');
    }
    
    return isValid;
}

// Manejar el envío del formulario
document.getElementById('applicationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateStep(4)) {
        // Aquí iría la lógica para enviar el formulario
        alert('¡Aplicación enviada exitosamente! Te contactaremos pronto.');
        // this.submit(); // Descomentar cuando esté listo el backend
    }
});

// Inicializar el formulario
document.addEventListener('DOMContentLoaded', function() {
    showStep(1);
});