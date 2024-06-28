document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');

    // Guarda la posición original del header para el comportamiento sticky
    const sticky = header.offsetTop;

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


});
