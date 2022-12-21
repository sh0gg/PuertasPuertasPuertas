// necesitamos código para que cuando .button:focus
// .above cambie su visibilidad a hidden

document.querySelector('.button').addEventListener('focus', function() {
    document.querySelector('.above').style.opacity = 0;
  });
  
// vale listo, lo has solucionado, pero ahora desaparece para siempre HAHAHAHA

  document.querySelector('.button').addEventListener('blur', function() {
    document.querySelector('.above').style.opacity = 1;
  });

// el script para cuando no se abre una puerta

var enlaces = document.querySelectorAll("a");
var audio = document.getElementById("sonido-puerta");

enlaces.forEach(function(enlace) {
  enlace.addEventListener("click", function() {
    audio.play();
  });
});

