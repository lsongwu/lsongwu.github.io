// Top link visibility on scroll
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        topLink.classList.add('visible');
    } else {
        topLink.classList.remove('visible');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const element = document.querySelector(href);
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
