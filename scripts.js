window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');

  // Set a timeout to remove the loading screen after 2 seconds
  setTimeout(() => {
    loadingScreen.classList.add('hidden'); // Add the 'hidden' class to fade out the loading screen
  }, 2); // You can adjust this time
});
