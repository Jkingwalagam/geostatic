document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.service-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceId = button.getAttribute('data-service');
            const info = document.getElementById(serviceId);

            // Toggle the display of the service info
            info.style.display = info.style.display === 'block' ? 'none' : 'block';
        });
    });
});
