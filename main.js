class Persona{
nombre
edad
sexo

constructor({nombre="Dame un nombre",edad="Dame una edad",sexo="Define mi sexo"}){
    this.edad=edad
    this.nombre=nombre
    this.sexo=sexo
}
get nombre(){
    return this.nombre
}
set nuevoNombre(nuevoNombre){
    this.nombre=nuevoNombre
}
get edad(){
    return this.edad
}
set nuevaEdad(nuevaEdad){
    this.edad=nuevaEdad
}
get sexo(){
   return this.sexo
}
set nuevoSexo(nuevoSexo){
    this.sexo=nuevoSexo
}

saludar (nombre){
    return `Hola ${nombre}`
}

}


let persona1 = new Persona({nombre:"Nicolas",edad:23,sexo:'macho'})

console.log(persona1);