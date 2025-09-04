document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting Hibitlab! We will get back to you soon.');
    this.reset();
});
