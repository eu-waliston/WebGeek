const navbarToglerBtn = document.querySelector('.navbar-toggler');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');

navbarToglerBtn.addEventListener('click', () => {

  navbarCollapseDiv.classList.toggle('show-navbar-collapse');

  if (navbarCollapseDiv.classList.contains('show-navbar-collapse')) {
    navbarToglerBtn.querySelector('img').src = "../images/times-menu-icon.png";
  } else {
    navbarToglerBtn.querySelector('img').src = "../images/ham-menu-icon.png";
  }

});

// fixed navgation bar 
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 100) {
    header.classList.add('fixed-navbar');
  } else {
    header.classList.remove('fixed-navbar');
  }
});