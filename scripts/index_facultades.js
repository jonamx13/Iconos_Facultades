
function getAnimation(facultad) {
  this.facultad = facultad;
  let animationCompleted = true;
  let iconFacultad = document.querySelector(`.${this.facultad}`);
  let animFacultad = bodymovin.loadAnimation({
    container: iconFacultad,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: `./assets/${this.facultad}.json`
  });

  
  var directionPlayFac = 1;
  iconFacultad.addEventListener("mouseenter", () => {
  animFacultad.setDirection(directionPlayFac);
  animFacultad.play();
});

  iconFacultad.addEventListener('mouseleave', () => {
  animFacultad.setDirection(-directionPlayFac);
  animFacultad.play();
});
}

//Animaciones de facultades

let facultades = [
  "F_Artes", "F_C_AgricolasYForestales", "F_C_Agrotecnologicas",
  "F_C_CulturaFisica", "F_C_PoliticasYSociales", "F_C_Quimicas",
  "F_ContaduriaYAdministracion", "F_Derecho", "F_EconomiaInternacional",
  "F_EnfermeriaYNutriologia", "F_FilosofiaYLetras", "F_Ingenieria",
  "F_Medicina", "F_Odontologia", "F_ZootecniaYEcologia", "Rayo_UACH"
]

facultades.forEach(function(facultad) {
  getAnimation(facultad);

  
})


