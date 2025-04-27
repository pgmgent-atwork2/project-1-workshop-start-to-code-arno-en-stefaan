//welke elementen moeten we aanpassen?
let levens = document.querySelector(".levens");
let score = document.querySelector(".score");
let gokCijfer = document.querySelector(".gokCijfer");

//klikbare elementen
let btnHoger = document.querySelector(".buttonHoger");
let btnLager = document.querySelector(".buttonLager");

//random nummer tussen 1-10
let huidigGetal = Math.floor(Math.random() * 11);
gokCijfer.textContent = huidigGetal;

// aantal levens en score instellen
let aantalLevens = 3;
let huidigeScore = 0;

// functie om een nieuw getal te genereren
function nieuwGetal() {
  return Math.floor(Math.random() * 11);
}

//buttons een functie geven
btnHoger.addEventListener("click", clickHoger);
btnLager.addEventListener("click", clickLager);

//functies aanmaken voor als er op een knop gedrukt word
function clickHoger() {
  const nieuw = nieuwGetal();
  if (nieuw > huidigGetal) {
    huidigeScore++;
    score.textContent = huidigeScore;
  } else {
    aantalLevens--;
    levens.textContent = aantalLevens;
  }
  huidigGetal = nieuw;
  gokCijfer.textContent = huidigGetal;
  checkGameOver();
}

function clickLager() {
  const nieuw = nieuwGetal();
  if (nieuw < huidigGetal) {
    huidigeScore++;
    score.textContent = huidigeScore;
  } else {
    aantalLevens--;
    levens.textContent = aantalLevens;
  }
  huidigGetal = nieuw;
  gokCijfer.textContent = huidigGetal;
  checkGameOver();
}

function checkGameOver() {
  if (aantalLevens <= 0) {
    alert("Game Over! Je score was: " + huidigeScore);
    location.reload(); // spel herstarten
  }
}
