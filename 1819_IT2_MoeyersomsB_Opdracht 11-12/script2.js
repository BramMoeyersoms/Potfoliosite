// hier komt je code
// console.log("Hallo wereld!");

// navigatie
  let navigatieknop = document.querySelector(".navigatieknop");
  let navigatie = document.querySelector(".header");
  navigatieknop.addEventListener("click", toonNavigatie);
  function toonNavigatie() {
  navigatieknop.classList.toggle("navigatiepositie");
  navigatie.classList.toggle("zichtbaar");
  }

let logo = document.getElementById("draak");
let kleuren = ["kleur1.png", "kleur2.png", "kleur3.png", "kleur4.png", "kleur5.png", "kleur6.png"];
let teller = 0;
let test;
function kleurveranderen() {
	if (teller < 5) {
		teller++;
	} else {
		teller = 0;
	}
	document.getElementById("draak").style.backgroundImage = "url(" + kleuren[teller] + ")";
  logo.classList.toggle("rotatie");
}

logo.addEventListener("click",kleurveranderen);
