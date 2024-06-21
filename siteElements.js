  // Funcionalidad del sticky header
  const header = document.getElementById('header');
  const sticky = header.offsetTop;
  const logoText = document.getElementById('logoText')

  // Por defecto, agregar la clase text-shadow-logo al logoText
  logoText.classList.add('text-shadow-logo');

  function checkSticky() {
      if (window.pageYOffset > sticky) {
          header.classList.add('sticky');
          logoText.classList.remove('text-shadow-logo');
      } else {
          header.classList.remove('sticky');
          logoText.classList.add('text-shadow-logo');
          
        
      }
  }

  window.onscroll = function() {
      checkSticky();
  };