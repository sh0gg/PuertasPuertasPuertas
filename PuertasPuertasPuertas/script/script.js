const above = document.querySelector('.above');
const button = document.querySelector('.button');

button.addEventListener('focus', function () {
  above.classList.add('.hidden');
});


// sonido para todos los enlaces
var enlaces = document.querySelectorAll("a");
var noAbre = document.getElementById("sonido-puerta");

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    noAbre.play();
  });
});

var chuerk = document.getElementById("chuerk");
var holy = document.getElementById("holy");
var mine = document.getElementById("mine");
var rick = document.getElementById("rick");

var puertachuerk = document.getElementById("puertachuerk");
var puertaholy = document.getElementById("puertaholy");
var puertamine = document.getElementById("puertamine");
var puertarick = document.getElementById("puertarick");

puertachuerk.forEach(function (puertac) {
  puertac.addEventListener('click', function () {
    chuerk.play();
  })
});

puertaholx.forEach(function (puertah) {
  puertah.addEventListener('click', function () {
    holy.play();
  })
});

puertamine.forEach(function (puertam) {
  puertam.addEventListener('click', function () {
    mine.play();
  })
});

puertarick.forEach(function (puertar) {
  puertar.addEventListener('click', function () {
    rick.play();
  })
});

enlaces.addEventListener('click', function () {
  if (enlaces.style.animationPlayState === 'paused') {
    enlaces.style.animationPlayState = 'running';
  } else {
    enlaces.style.animationPlayState = 'paused';
  }
});

window.onload = function () {
  alert("Nuestra página utiliza millones de cookies que te infectará el PC con software de criptominería, no puedes no aceptarlas. Lo sentimos.");
};

function showPrompt() {
  var result = prompt("Para continuar en la página, por favor acepta nuestra política de privacidad y cookies. Escribe acepto:");
  if (result !== "acepto") {
    window.location.href = "http://www.google.com";
  }
}

let hasClicked = false

window.document.addEventListener('click', function () {
  if (!hasClicked) {
    showPrompt();
    hasClicked = true;
  }
})

