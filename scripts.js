window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');

  // Delay for 1 second to show the loader before fading it out
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
  }, 1000); // Wait 1 second before starting to hide the loader
});

// Wait for the page to fully load
window.addEventListener('DOMContentLoaded', (event) => {
    // Select all elements with class 'animate-text'
    const animatedTextElements = document.querySelectorAll('.animate-text');

    // Add animation on page load
    animatedTextElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animate__animated', 'animate__fadeInUp');
        }, index * 300); // Delay between each animation
    });

    // Re-animate when scrolling into view (optional)
    window.addEventListener('scroll', () => {
        animatedTextElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (elementPosition < viewportHeight - 100) {
                element.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    });

    // Add hover animation (e.g., bounce on hover)
    animatedTextElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.classList.remove('animate__fadeInUp');
            element.classList.add('animate__bounce');
        });

        element.addEventListener('mouseout', () => {
            element.classList.remove('animate__bounce');
        });
    });
});
