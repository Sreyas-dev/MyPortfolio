document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor jump

            const targetId = this.getAttribute('href'); // Get href value (e.g., "#about")
            
            // Check if targetId is just "#" (e.g. a link to the top of the page or a placeholder)
            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return; // Exit if it's just a "#"
            }

            // Proceed if targetId is a valid section ID
            try {
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start' // Aligns the top of the target section to the top of the viewport
                    });
                } else {
                    console.warn('Smooth scroll target not found for ID:', targetId);
                }
            } catch (e) {
                // This catch block can handle invalid selector syntax in targetId, though hrefs should be simple IDs.
                console.error('Error finding or scrolling to target section:', e);
            }
        });
    });
});
