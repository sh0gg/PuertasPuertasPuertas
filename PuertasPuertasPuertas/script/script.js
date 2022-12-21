const above = document.querySelector('.above');
const button = document.querySelector('.button');

button.addEventListener('focus', function () { 
    above.classList.add('.hidden');
}); 



var enlaces = document.querySelectorAll("a");
var audio = document.getElementById("sonido-puerta");

enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        audio.play();
    });
});

/* Comandos para tocarle los huevos a Porta
window.onload = function() {
    alert("Nuestra página utiliza millones de cookies que te infectará el PC con software de criptominería, no puedes no aceptarlas. Lo sentimos.");
};

function showPrompt() {
    var result = prompt("Para continuar en la página, por favor acepta nuestra política de privacidad y cookies");
    if (result !== "acepto") {
      window.location.href = "http://www.google.com";
    }
  }
  
  window.onload = function() {
    showPrompt();
  }
  */