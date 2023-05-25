class Figura {
  color;
  area;
  constructor({ color = "dame un color", area = 0 }) {
    this.area = area;
    this.color = color;
  }
  set areaNueva(nuevaArea) {
    this.area = nuevaArea;
  }
  get area() {
    return this.area;
  }
  set nuevoColor(nuevoColor) {
    this.color = nuevoColor;
  }
  get color() {
    return this.color;
  }
  calcularArea(area) {
    return this.area;
  }
}

class Circulo extends Figura {
  radio;
  constructor({ radio, color, area }) {
    super({ color, area });
    this.radio = radio;
  }
  set radionuevo(nuevoRadio) {
    this.radio = nuevoRadio;
  }
  get radio() {
    return this.radio;
  }
  calcularArea(radio) {
    return Math.PI * radio;
  }
}

class Rectangulor extends Figura {
  largo;
  ancho;
  constructor({ largo, ancho, color }) {
    super({ color });
    this.ancho = ancho;
    this.largo = largo;
  }
  get largo() {
    return this.largo;
  }
  set nuevoLargo(nuevoLargo) {
    this.largo = nuevoLargo;
  }
  get ancho() {
    return this.ancho;
  }
  set nuevoAncho(nuevoAncho) {
    this.ancho = nuevoAncho;
  }
  calcularArea(largo, ancho) {
    return largo * ancho;
  }
}


const formulario = document.querySelector("form");
const botonA = document.getElementById("btn");

botonA.addEventListener("click", (el) => {
  el.preventDefault();
  let datos = Object.fromEntries(new FormData(formulario));
  console.log(datos);
  switch (datos.figura) {
    case "Circulo":
      let ciruculo1 = new Circulo({ radio: datos.radio, color: datos.color });
      return (document.getElementById(
        "cartas"
      ).innerHTML += ` <div class="col-3">
   <div class="card text-bg-success m-3" style="max-width: 18rem;">
   <div class="card-header">tarjeta</div>
   <div class="card-body">
   <h3 class="card-title">2023</h3>
   <p class="card-text">
   <ul>
   <li><b>${ciruculo1.calcularArea(ciruculo1.radio)}</b></li>
   <li>${ciruculo1.color}</li>
   <li>${datos.figura}</li>
   </ul>
   </p>
   </div>` ,
   formulario.reset());
      
    case "Rectangulo":
      let rectangulo1 = new Rectangulor({
        largo: datos.largo,
        ancho: datos.ancho,
        color: datos.color,
      });
      return (document.getElementById(
        "cartas"
      ).innerHTML += ` <div class="col-3">
   <div class="card text-bg-success m-3" style="max-width: 18rem;">
   <div class="card-header">tarjeta</div>
   <div class="card-body">
   <h3 class="card-title">2023</h3>
   <p class="card-text">
   <ul>
   <li><b>${rectangulo1.calcularArea(rectangulo1.largo,rectangulo1.ancho)}</b></li>
   <li>${rectangulo1.color}</li>
   <li>${datos.figura}</li>
   </ul>
   </p>
   </div>`,formulario.reset());
   
  }
  /*HTML*/

  
});
