// Espera 5 segundos y luego esconde el preloader y muestra el contenido
window.addEventListener('load', function() {
    setTimeout(function(){
        document.body.classList.add('loaded');
        document.getElementById('preloader').style.display = 'none'; // Esconde el preloader
        document.getElementById('content').style.display = 'block'; // Muestra el contenido
    }, 2000);
});



