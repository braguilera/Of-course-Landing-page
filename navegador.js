// Seleccionar todos los enlaces de navegación y las secciones que queremos observar
const navLinks = document.querySelectorAll('.inicio__nav__botones');
const sections = document.querySelectorAll('section');

// Usar IntersectionObserver para observar las secciones
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const navItem = document.querySelector(`a[href="#${id}"]`);

        // Si la sección está en el viewport, agregar la clase 'active'
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navItem) {
                navItem.classList.add('active');
            }
        }
    });
}, {
    rootMargin: '-50% 0px -50% 0px', // Ajusta el margen para mejorar la detección
    threshold: 0.1 // Qué tanto de la sección debe estar visible para ser considerada "en vista"
});

// Aplicar el observer a cada sección
sections.forEach(section => {
    observer.observe(section);
});
