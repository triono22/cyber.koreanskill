/* ==========================================
   AETHER ACADEMY INTERACTIVE ENGINE
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.9rem 2rem';
            navbar.style.background = 'rgba(8, 7, 17, 0.85)';
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.padding = '1.25rem 2rem';
            navbar.style.background = 'rgba(8, 7, 17, 0.6)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 2. Animated Counter for Hero Stats
    const stats = document.querySelectorAll('.stat-number');
    
    const animateCounters = () => {
        stats.forEach(stat => {
            const text = stat.innerText;
            // Extract the numeric part and special chars (like K, +, .)
            const numericValue = parseFloat(text.replace(/[^0-9.]/g, ''));
            const suffix = text.replace(/[0-9.]/g, '');
            
            let start = 0;
            const duration = 2000; // 2 seconds
            const stepTime = 30;
            const totalSteps = duration / stepTime;
            const increment = numericValue / totalSteps;
            
            const timer = setInterval(() => {
                start += increment;
                if (start >= numericValue) {
                    stat.innerText = numericValue % 1 === 0 ? Math.floor(numericValue) + suffix : numericValue.toFixed(1) + suffix;
                    clearInterval(timer);
                } else {
                    stat.innerText = numericValue % 1 === 0 ? Math.floor(start) + suffix : start.toFixed(1) + suffix;
                }
            }, stepTime);
        });
    };

    // Run counters animation
    animateCounters();

    // 3. Smooth Navigation Links Highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // 4. Mobile Menu Interactive Toggle
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const navLinksContainer = document.querySelector('.nav-links');
            const menuIcon = menuToggle.querySelector('i');
            
            if (navLinksContainer.style.display === 'flex') {
                navLinksContainer.style.display = 'none';
                menuIcon.className = 'fa-solid fa-bars-staggered';
            } else {
                navLinksContainer.style.display = 'flex';
                navLinksContainer.style.flexDirection = 'column';
                navLinksContainer.style.position = 'absolute';
                navLinksContainer.style.top = '100%';
                navLinksContainer.style.left = '0';
                navLinksContainer.style.width = '100%';
                navLinksContainer.style.background = 'rgba(8, 7, 17, 0.95)';
                navLinksContainer.style.padding = '2rem';
                navLinksContainer.style.borderBottom = '1px solid var(--border-glass)';
                menuIcon.className = 'fa-solid fa-xmark';
            }
        });
    }

    // 5. Interactive Cards Accent Hover Tracking (Tilt Light Effect)
    const cards = document.querySelectorAll('.course-card, .dashboard-preview');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
