document.addEventListener('DOMContentLoaded', () => {
    const serviceButtons = document.querySelectorAll('.service-btn');

    serviceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceInfo = document.getElementById(button.dataset.service);
            if (serviceInfo) {
                serviceInfo.style.display = serviceInfo.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});
