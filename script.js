document.addEventListener('DOMContentLoaded', () => {
    initializeTyped();
    setupMenuToggle();
    setupDynamicHeader();
    smoothScroll();
    detectDevice();
});

function initializeTyped() {
    const typedElement = document.querySelector('#im-a');
    if (typedElement) {
        const typeSpeed = window.innerWidth < 768 ? 70 : 100;
        const backSpeed = window.innerWidth < 768 ? 35 : 50;
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
            typeSpeed,
            backSpeed,
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

        // Close menu after link click (mobile optimization)
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) nav.classList.remove('active');
            });
        });
    }
}

function setupDynamicHeader() {
    const header = document.querySelector('header');
    const compactHeader = document.querySelector('#compact-header');
    const isMobile = window.innerWidth < 768;

    if (!isMobile && compactHeader) {
        let lastScrollTop = 0;
        let ticking = false;
        const scrollThreshold = 200;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
                        // Hide main header, show compact one
                        header.style.transform = 'translateY(-100%)';
                        compactHeader.style.transform = 'translateY(0)';
                    } else if (scrollTop < lastScrollTop || scrollTop <= scrollThreshold) {
                        // Show main header, hide compact one
                        header.style.transform = 'translateY(0)';
                        compactHeader.style.transform = 'translateY(-100%)';
                    }

                    lastScrollTop = scrollTop;
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
}

function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function detectDevice() {
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        // Device is likely a mobile or tablet with touch capability
        document.body.classList.add('touch-device');
    } else {
        // Device is likely a desktop or non-touch device
        document.body.classList.add('non-touch-device');
    }
}
