// Smooth scrolling for navigation links
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

// Email form submission
const emailInput = document.querySelector('.email-input');
const ctaButton = document.querySelector('.btn-cta');

ctaButton.addEventListener('click', function() {
    const email = emailInput.value.trim();

    if (!email) {
        alert('Please enter your email address');
        return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Success message (replace with actual form submission)
    alert(`Thank you! We'll contact you at ${email} to schedule your free consultation.`);
    emailInput.value = '';
});

// CTA button click
const ctaLargeButton = document.querySelector('.btn-cta-large');
if (ctaLargeButton) {
    ctaLargeButton.addEventListener('click', function() {
        // Scroll to contact section or show contact form
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Add active class to navigation on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Animate stats on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateValue(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all stat numbers
document.querySelectorAll('.stat-number').forEach(stat => {
    observer.observe(stat);
});

function animateValue(element) {
    const text = element.textContent;
    const number = parseInt(text.replace(/[^0-9]/g, ''));
    const suffix = text.replace(/[0-9]/g, '');

    if (isNaN(number)) return;

    let current = 0;
    const increment = number / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            element.textContent = number + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 20);
}

// Mobile menu toggle (basic version)
const createMobileMenu = () => {
    const navWrapper = document.querySelector('.nav-wrapper');
    const navMenu = document.querySelector('.nav-menu');

    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--text-dark);
    `;

    // Add hamburger button
    navWrapper.appendChild(hamburger);

    // Toggle menu on mobile
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Show hamburger on mobile
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'block';
        } else {
            hamburger.style.display = 'none';
            navMenu.classList.remove('active');
        }
    });

    // Initial check
    if (window.innerWidth <= 768) {
        hamburger.style.display = 'block';
    }
};

// Initialize mobile menu
createMobileMenu();

console.log('Marketing Agency website loaded successfully!');
