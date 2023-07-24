// JavaScript
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 180) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  

  const userImage = document.querySelector('.user-icon');
  const popUpMess = document.querySelector('.user-icon-popup');

  userImage.addEventListener('click', () => popUpMess.classList.toggle('show'));
  let text = popUpMess.querySelector('p');
  let actionBtn = popUpMess.querySelector('a');





