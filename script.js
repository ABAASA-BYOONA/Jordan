// 1. Dynamic PDF Engine
function openProject(pdfName) {
    const pdfPath = `assets/pdfs/${pdfName}`;
    // Opens the targeted project asset portfolio inside a clean alternate window tab
    window.open(pdfPath, '_blank');
}
// 2. Mobile Menu Toggle Logic
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
}));

// 3. High-Performance Scroll Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Unobserve after running structural entry animation once
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05, // Activates early during viewport entrance
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });
});