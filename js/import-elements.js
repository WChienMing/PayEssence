document.addEventListener("DOMContentLoaded", function() {

  const navbarContainer = document.getElementById("navbar-container");
  const footerContainer = document.getElementById("footer-container");

  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      navbarContainer.innerHTML = data;
      const navLinks = document.querySelectorAll('.nav-item.nav-link');
      const currentPage = window.location.pathname.split('/').pop();
      navLinks.forEach(function(link) {
        const linkPage = link.getAttribute('href'); 
        if (currentPage === linkPage) {
          link.classList.add('active');
        }
      });
    });

  fetch("footer.html")
    .then(response => response.text())
    .then(data => footerContainer.innerHTML = data);

});
