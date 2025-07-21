// Custom scripts can be added here

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

console.log("Portfolio Loaded");
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  links.classList.toggle('nav-active');
}
