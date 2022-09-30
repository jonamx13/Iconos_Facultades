
function getAnimation(facultad) {
  this.facultad = facultad;
  bodymovin.loadAnimation({
    container: document.querySelector(`.${this.facultad}`),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: `../assets/${this.facultad}.json`
  })

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
