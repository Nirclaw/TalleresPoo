class Persona {
  nombre;
  edad;
  sexo;

  constructor({
    nombre = "Dame un nombre",
    edad = "Dame una edad",
    sexo = "Define mi sexo",
  }) {
    this.edad = edad;
    this.nombre = nombre;
    this.sexo = sexo;
  }
  get nombre() {
    return this.nombre;
  }
  set nuevoNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }
  get edad() {
    return this.edad;
  }
  set nuevaEdad(nuevaEdad) {
    this.edad = nuevaEdad;
  }
  get sexo() {
    return this.sexo;
  }
  set nuevoSexo(nuevoSexo) {
    this.sexo = nuevoSexo;
  }

  saludar(nombre) {
    return `Hola ${nombre} que tengas un buen dia :) <3`;
  }

  static esMayorDeEdad(edad) {
    return edad >= 18 ? true : false;
  }
}

class Estudiante extends Persona {
  carrera;
  constructor({ nombre, edad, sexo, carrera }) {
    super({ nombre, edad, sexo });
    this.carrera = carrera;
  }
  get carrera() {
    return this.carrera;
  }
  set carrera(nuevaCarrear) {
    this.carrera = nuevaCarrear;
  }
  estudiar(carrera) {
    return `Estas estudiando ${carrera}, Muchos exitos :D`;
  }
}

const formulario = document.querySelector("form");
const botonA = document.getElementById("btn");

botonA.addEventListener("click", (el) => {
  el.preventDefault();
  let datos = Object.fromEntries(new FormData(formulario));

  let persona1 = new Persona({
    nombre: datos.name,
    edad: datos.edad,
    sexo: datos.sexo,
  });

  let estudiante1 = new Estudiante({
    nombre: datos.name,
    edad: datos.edad,
    sexo: datos.sexo,
    carrera: datos.carrera,
  });

  /*HTML*/
  document.getElementById("cartas").innerHTML += ` <div class="col-3">
<div class="card text-bg-success m-3" style="max-width: 18rem;">
<div class="card-header">tarjeta</div>
<div class="card-body">
<h3 class="card-title">2023</h3>
<p class="card-text">
<ul>
<li><b>${persona1.saludar(persona1.nombre)}</b></li>
<li>${estudiante1.estudiar(estudiante1.carrera)}</li>
<li>${Persona.esMayorDeEdad(persona1.edad) ? "Es mayor edad" : "No es mayor edad"}</li>
</ul>
</p>
</div>`;

formulario.reset()
});

