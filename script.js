document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to navbar links for smooth scrolling
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Get the target section id
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Smooth scroll to the target section
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for navbar height
                behavior: 'smooth'
            });

            // Update active class
            document.querySelectorAll('.navbar a').forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Update active nav item on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        // Get all sections
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const currentId = '#' + section.getAttribute('id');
                document.querySelectorAll('.navbar a').forEach(navLink => {
                    navLink.classList.remove('active');
                    if (navLink.getAttribute('href') === currentId) {
                        navLink.classList.add('active');
                    }
                });
            }
        });
    });
});