  // Funcionalidad del sticky header
  const header = document.getElementById('header');
  const sticky = header.offsetTop;


  // Por defecto, agregar la clase text-shadow-logo al logoText
  logoText.classList.add('text-shadow-logo');

  function checkSticky() {
      if (window.pageYOffset > sticky) {
          header.classList.add('sticky');
   
      } else {
          header.classList.remove('sticky');
     
          
        
      }
  }

  window.onscroll = function() {
      checkSticky();
  };