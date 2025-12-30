// script.js

// Smooth scroll untuk navigation links
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

// Active nav link berdasarkan scroll position
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#DC143C';
            link.style.textShadow = '0 0 10px rgba(220, 20, 60, 0.7)';
        } else {
            link.style.color = 'white';
            link.style.textShadow = 'none';
        }
    });
});

// Add animation pada card saat di-hover
document.querySelectorAll('.p2w-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Animasi fade in saat page load
window.addEventListener('load', () => {
    document.querySelectorAll('section').forEach((section, index) => {
        section.style.opacity = '0';
        section.style.animation = `fadeIn 0.8s ease forwards`;
        section.style.animationDelay = `${index * 0.2}s`;
    });
});

// Tambahkan keyframe animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
