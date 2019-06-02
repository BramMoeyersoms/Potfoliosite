// hier komt je code
// console.log("Hallo wereld!");

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    document.querySelector(".draak").classList.add("test");
    document.querySelector(".fotokader").classList.add("juistePlaats");
  } else {
    document.querySelector(".draak").classList.remove("test");
    document.querySelector(".fotokader").classList.remove("juistePlaats");
  }

}

// navigatie
  let navigatieknop = document.querySelector(".navigatieknop");
  let navigatie = document.querySelector(".header");
  navigatieknop.addEventListener("click", toonNavigatie);
  function toonNavigatie() {
  navigatieknop.classList.toggle("navigatiepositie");
  navigatie.classList.toggle("zichtbaar");
  }

let handje = document.querySelector(".highfive");
handje.addEventListener("click", punt);
function punt() {
  handje.classList.toggle("hand");
}
