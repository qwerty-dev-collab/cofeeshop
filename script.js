// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Order button alert
document.querySelector('.btn').addEventListener('click', () => {
  alert('Order feature coming soon! Stay tuned!');
});
