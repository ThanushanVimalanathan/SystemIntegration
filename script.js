 
        document.getElementById('newsletterForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our prevention tips!');
            this.reset();
        });
        
        document.getElementById('reportForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Your report has been submitted anonymously to local authorities. Thank you for helping protect children.');
            this.reset();
        });
        
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message. We will respond within 48 hours.');
            this.reset();
        });