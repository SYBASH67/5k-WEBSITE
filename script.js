document.addEventListener('DOMContentLoaded', () => {

    // --- Dom Reference Targets ---
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    const contactForm = document.getElementById('businessContactForm');
    const successMsg = document.getElementById('formSuccessMessage');

    // --- Sticky Navigation & Dynamic Link Highlighter ---
    window.addEventListener('scroll', () => {
        // Sticky Trigger
        if (window.scrollY > 50) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }

        // Active Section Navigation Node Detector
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    });

    // --- Responsive Mobile Hamburger Menu Navigation Toggle ---
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close Mobile Menu on Nav Item Click
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // --- Scroll-Driven Reveal Mechanism ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const triggerBottom = (window.innerHeight / 5) * 4.2;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Initial programmatic run-through to check for visibly present components
    revealOnScroll();

    // --- Working UI Interactive Form Handling ---
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop standard frame redirection reload

            // Extract values for client-side evaluation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value.trim();

            // Simple data payload simulation wrapper
            console.log('--- Lead Payload Captured ---');
            console.log(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`);

            // Display success message smoothly UI response state change
            contactForm.reset();
            contactForm.style.display = 'none';
            successMsg.style.display = 'block';
        });
    }
});