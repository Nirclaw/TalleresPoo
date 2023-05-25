class Animal{
    nombre
    edad
    constructor({nombre="dame un nombre",edad="dame una edad"}){
        this.edad=edad
        this.nombre=nombre
    }
    get edad(){
        return this.edad
    }
    set edadNueva(nuevaEdad){
        this.edad=nuevaEdad
    }
    get nombre (){
    return this.nombre 
    }
    set nombreNuevo(nuevoNombre){
        this.nombre=nuevoNombre
    }
    hacerSonido(nombre,sonido){
        return `El ${nombre} hace ${sonido}`
    }

}


class Perro extends Animal{
    raza 
    constructor(raza,nombre,edad){
        super({nombre,edad})
        this.raza=raza
    }
    get raza (){
        return this.raza 
    }
    set nuevaRaza(nuevaraza){
        this.raza=nuevaraza
    }
    
moverCola(raza){
    return `El ${raza} esta moviendo la cola`
}
}

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
