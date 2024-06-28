// script.js
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navUL = document.getElementById('nav-ul');

  hamburger.addEventListener('click', () => {
      navUL.classList.toggle('active');
  });
});
