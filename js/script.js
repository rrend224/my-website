// JavaScript Document
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            
            if (!nameInput.value.trim()) {
                alert('お名前を入力してください。');
                nameInput.focus();
                return;
            }
            
            if (!emailInput.value.trim()) {
                alert('Eメールを入力してください。');
                emailInput.focus();
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                alert('有効なEメールアドレスを入力してください。');
                emailInput.focus();
                return;
            }
            
            // If validation passes, you would normally submit the form
            alert('お問い合わせありがとうございます。すぐにご連絡いたします。');
            this.reset();
        });
    }

    // For demonstration purposes - replace placeholder images with actual construction images
    // In a real implementation, you would use actual image paths
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.backgroundImage = 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80")';
    }
});