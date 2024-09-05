document.addEventListener('DOMContentLoaded', () => {
    initializeTyped();
    setupMenuToggle();
    setupDynamicHeader();
});

function initializeTyped() {
    const typedElement = document.querySelector('#im-a');
    if (typedElement) {
        new Typed(typedElement, {
            strings: [
                'Web Developer', 
                'Adaptive', 
                'Problem Solver', 
                'Creative Thinker', 
                'Tech Enthusiast',
                'Future-Ready',
                'Creative Coder',
                'Code Artisan'
            ],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true
        });
    }
}

function setupMenuToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
}

function setupDynamicHeader() {
    const header = document.getElementById("header");
    const compactHeader = document.createElement("div");
    compactHeader.id = "compact-header";
    compactHeader.innerHTML = `
        <a href="index.html" class="logo">Raven</a>
        <nav>
            <a href="index.html">Home</a>
            <a href="skills.html">Skills</a>
            <a href="projects.html">Projects</a>
            <a href="contact.html">Contact</a>
        </nav>
    `;
    document.body.insertBefore(compactHeader, document.body.firstChild);

    let lastScrollTop = 0;
    let ticking = false;

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (scrollTop > lastScrollTop && scrollTop > 200) {
                    // Scrolling down
                    header.style.transform = "translateY(-100%)";
                    compactHeader.style.transform = "translateY(0)";
                } else if (scrollTop < lastScrollTop || scrollTop <= 200) {
                    // Scrolling up or near the top
                    header.style.transform = "translateY(0)";
                    compactHeader.style.transform = "translateY(-100%)";
                }
                
                lastScrollTop = scrollTop;
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Add any additional functions or event listeners here

// Example: Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Form submission handling (if you have a contact form)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
    });
}
