document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          navLinks.forEach(link => link.classList.remove('active'));
          e.target.classList.add('active');
      });
  });
});
