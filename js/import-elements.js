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

      const navLinks_dropdown = document.querySelectorAll('.dropdown-item');
        const currentPage_dropdown = window.location.pathname.split('/').pop();

        let isDropdownItemActive = false;
        navLinks_dropdown.forEach(function(link) {
            const linkPage = link.getAttribute('href');
            if (currentPage_dropdown === linkPage) {
                link.classList.add('active');
                isDropdownItemActive = true;
            }
        });

        if (isDropdownItemActive) {
            const mainLink = document.querySelector('.nav-link.dropdown-toggle');
            mainLink.classList.add('active');
        }

    });
    
  fetch("footer.html")
    .then(response => response.text())
    .then(data => footerContainer.innerHTML = data);

});
