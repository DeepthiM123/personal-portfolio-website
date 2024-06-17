document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust based on header height
                behavior: 'smooth'
            });
        });
    });
});

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.reset();
    showSuccessMessage();
});

function showSuccessMessage() {
    alert('Message sent successfully!');
}

