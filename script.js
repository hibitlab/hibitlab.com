
// Contact form handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting Hibitlab! We will get back to you soon.');
    this.reset();
});

// FAQ accordion interactivity
document.querySelectorAll('.faq-item').forEach(function(item) {
    item.addEventListener('click', function() {
        // Toggle active class
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        } else {
            document.querySelectorAll('.faq-item').forEach(function(i) {
                i.classList.remove('active');
            });
            item.classList.add('active');
        }
    });
});
