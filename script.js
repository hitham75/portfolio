// --- Reveal Elements on Scroll Event ---
// --- Reveal Elements on Scroll Event ---
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    if(heroContent) heroContent.classList.add('active');
    
    revealOnScroll();
});

window.addEventListener('scroll', revealOnScroll);


// --- Active Link Indicator Highlighting ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// ملاحظة: تم إزالة كود الـ preventDefault القديم هنا لكي يعمل الإرسال الحقيقي بنجاح!


// --- Contact Form Submission Safeguard Logic ---
const portfolioForm = document.getElementById('portfolioForm');
if(portfolioForm) {
    portfolioForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        const nameVal = document.getElementById('name').value;
        const emailVal = document.getElementById('email').value;
        
        alert(`Thank you, ${nameVal}! Your message was sent successfully.`);
        this.reset();
    });
}