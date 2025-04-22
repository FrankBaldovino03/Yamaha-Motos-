// ScrollTop Button
window.addEventListener('scroll', function() {
    const scrollTopButton = document.getElementById('scrollTop');
    if (window.pageYOffset > 300) {
        scrollTopButton.classList.add('active');
    } else {
        scrollTopButton.classList.remove('active');
    }
});

document.getElementById('scrollTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    // Función para manejar las animaciones al hacer scroll
    function handleScrollAnimations() {
        const elements = document.querySelectorAll('.video-section, .motorcycles-section, .features-section, .testimonials-section, .contact-section, .motorcycle-card, .feature-box, .testimonial-card');
        
        elements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                // Añadir delay basado en el índice para elementos similares
                if (element.classList.contains('motorcycle-card') || 
                    element.classList.contains('feature-box') || 
                    element.classList.contains('testimonial-card')) {
                    setTimeout(() => {
                        element.classList.add('is-visible');
                    }, 200 * (index % 3)); // Delay escalonado para elementos en la misma fila
                } else {
                    element.classList.add('is-visible');
                }
            }
        });
    }

    // Ejecutar al cargar la página y al hacer scroll
    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations();

    // Menú Hamburguesa
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            const icon = this.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Cerrar el menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Cerrar el menú al redimensionar la ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mainNav.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Filtro de Categorías de Motos
    const categoryButtons = document.querySelectorAll('.motorcycle-category-button');
    const motorcycleItems = document.querySelectorAll('.motorcycle-item');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            motorcycleItems.forEach(item => {
                const categories = item.dataset.categories.split(' ');
                if (category === 'todas' || categories.includes(category)) {
                    item.style.display = 'block';
                    // Reiniciar la animación al mostrar
                    setTimeout(() => {
                        item.classList.add('is-visible');
                    }, 100);
                } else {
                    item.style.display = 'none';
                    item.classList.remove('is-visible');
                }
            });
        });
    });

    // Validación del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
                contactForm.reset();
            }
        });
    }

    // Ajustes responsivos para el video
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
        function adjustVideoSize() {
            const video = videoContainer.querySelector('video');
            if (video) {
                video.style.width = '100%';
                video.style.height = 'auto';
            }
        }

        window.addEventListener('resize', adjustVideoSize);
        adjustVideoSize();
    }

    // Ajustes responsivos para las tarjetas de motos
    const motorcycleCards = document.querySelectorAll('.motorcycle-card');
    function adjustCardLayout() {
        const windowWidth = window.innerWidth;
        motorcycleCards.forEach(card => {
            card.style.marginBottom = windowWidth <= 768 ? '20px' : '30px';
        });
    }

    window.addEventListener('resize', adjustCardLayout);
    adjustCardLayout();
});


