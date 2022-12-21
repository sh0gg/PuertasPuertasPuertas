// necesitamos código para que cuando .button:focus
// .above cambie su visibilidad a hidden

//document.querySelector('.button').addEventListener('focus', function() {
//    document.querySelector('.above').style.opacity = 0;
//  });

// vale listo, lo has solucionado, pero ahora desaparece para siempre HAHAHAHA

//  document.querySelector('.button').addEventListener('blur', function() {
//    document.querySelector('.above').style.opacity = 1;
//  });

// el script para cuando no se abre una puerta

var enlaces = document.querySelectorAll("a");
var audio = document.getElementById("sonido-puerta");

enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        audio.play();
    });
});


// nuevo scrip para manejar above (no funciona)

// Añade un manejador de evento para el evento "focus" del elemento de clase "button"
document.querySelector('.button').addEventListener('focus', function () {

    // Oculta el elemento de clase "above"
    document.querySelector('.above').style.opacity = 0;
});

// Añade un manejador de evento para el evento "focusin" del elemento de clase "button"
document.querySelector('.button').addEventListener('focusin', function () {

    // Muestra el elemento de clase "above"
    document.querySelector('.above').style.opacity = 1;
});
