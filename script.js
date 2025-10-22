document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior (which reloads the page)
        event.preventDefault();

        // 1. Get form data (for simulation)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // In a real-world scenario, you would send this data to a server here.
        console.log('Form Submitted!', { name, email, message });

        // 2. Display success message
        formStatus.textContent = `Thank you, ${name}! Your message has been received. (This is a simulation.)`;
        formStatus.style.backgroundColor = '#d4edda'; // Light green background
        formStatus.style.color = '#155724'; // Dark green text
        formStatus.style.padding = '10px';
        formStatus.style.borderRadius = '4px';
        formStatus.style.display = 'block';

        // 3. Clear the form fields after a short delay
        setTimeout(() => {
            contactForm.reset();
            // Hide the status message after a while
            setTimeout(() => {
                 formStatus.style.display = 'none';
            }, 3000); // Hide after 3 seconds
        }, 500); // Clear form after 0.5 seconds
    });
});