class Vehiculo {
  marca;
  modelo;
  velocidad;
  constructor({
    marca = "digite una carca",
    modelo = "digite un modelo",
    velocidad = 0,
  }) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidad = velocidad;
  }
  get marca() {
    return this.marca;
  }
  set nuevaMarcar(nuevamarca) {
    this.marca = nuevamarca;
  }
  get modelo() {
    return this.modelo;
  }
  set nuevoModelo(nuevoModelo) {
    this.modelo = nuevoModelo;
  }
  get velocidad() {
    return this.velocidad;
  }
  set nuevaVelocidad(nuevaVelocidad) {
    this.velocidad = nuevaVelocidad;
  }

  acelerar(km){
    return km + 10
  }
}

let vehiculo1 =new Vehiculo({marca:'mercedez',modelo:'2024',velocidad:100})
console.log(vehiculo1.acelerar(vehiculo1.velocidad));

class Coche extends Vehiculo{
    combustible
    constructor(combustible,velocidad,marca){
        super({velocidad,marca})
        this.combustible=combustible
    }
    get combustible(){
        return this.combustible
    }
    set nuevoCombustible(nuevoCombustible){
        this.combustible = nuevoCombustible
    }
    acelerar(km){
        return km +20
    }

    static convertirKmHenMph(km){
        return km / 1.609344
    }

}
console.log(Coche.convertirKmHenMph(100));

const formulario = document.querySelector("form");
const botonA = document.getElementById("btn");

botonA.addEventListener("click", (el) => {
  el.preventDefault();
  let datos = Object.fromEntries(new FormData(formulario));

  let animal = new Animal({
    nombre: datos.name,
    edad: datos.edad,
    sonido:datos.sonido
  });
  let perro1= new Perro({
    raza:datos.raza,
    edad:datos.edad,
  })

  /*HTML*/
  document.getElementById("cartas").innerHTML += ` <div class="col-3">
<div class="card text-bg-success m-3" style="max-width: 18rem;">
<div class="card-header">tarjeta</div>
<div class="card-body">
<h3 class="card-title">2023</h3>
<p class="card-text">
<ul>
<li><b>${animal.hacerSonido(animal.nombre,datos.sonido)}</b></li>
<li>${perro1.moverCola(datos.raza)}</li>
</ul>
</p>
</div>`;

formulario.reset()
});
