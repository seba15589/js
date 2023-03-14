function saludar(){
    alert("Bienvenido")
    let nombre = prompt ("Ingrese su nombre")
    while(nombre=== ""){
    nombre = prompt ("ingrese su nombre por favor")
    }
    return nombre
}
saludar();

class Prestamo{
    constructor (nombre, plazo, cuota){
        this.nombre = nombre;
        this.plazo = plazo;
        this.cuota = cuota;
    }
}

const personal = new Prestamo("personal", "12 meses", "2000");
const adelanto = new Prestamo ("adelanto", "1 mes", "500");
const express = new Prestamo ("express", "3 meses", "1000");

const arrayPrestamos = [personal, adelanto, express];
console.log(arrayPrestamos);

function seleccionarP(){
    let credito = parseInt (prompt ( "Que tipo de prestamo quiere pedir? : \n 1)Personal, \n 2)Adelanto, \n 3)Express "));
    while(credito < 1 || credito >3){
    credito = parseInt (prompt ( "Que tipo de prestamo quiere pedir? : \n 1)Personal, \n 2)Adelanto, \n 3)Express "))};
    mostrarDetalle (credito);
    }

function mostrarDetalle (credito){
    if(credito === 1){
        const creditoPersonal = arrayPrestamos.some (Prestamo => personal.nombre === "personal");
        console.log(creditoPersonal);
        alert ( "Este credito se encuentra disponible!, nos pondremos en contacto a la brevedad! El plazo de pago es de 12 meses y la cuota de $ 2.000");
    }
    if(credito === 2){
        const creditoadelanto = arrayPrestamos.some (Prestamo => adelanto.nombre === "adelanto");
        console.log(creditoadelanto);
        alert ( "Este credito se encuentra disponible!, nos pondremos en contacto a la brevedad! El plazo de pago es de 1 mes y la cuota de $ 500 ");
    }
    if(credito === 3){
        const creditoExpress = arrayPrestamos.some (Prestamo => express.nombre === "express");
        console.log(creditoExpress);
        alert ( "Este credito se encuentra disponible!, nos pondremos en contacto a la brevedad! El plazo de pago es de 3 meses y la cuota de $ 1.000");
    }
}
seleccionarP ();

let opinion = prompt ("Contanos que te parecio nuestro sitio! Podes completar con : 1-muy bueno 2-bueno 3-malo :  ")

switch (opinion){
    case "muy bueno":
        console.log("Muchas gracias por la buena onda!");
        break;
    
    case "bueno":
        console.log ("Esperemos que la proxima sea mejor!");
        break;

    case "malo":
        console.log("Te pedimos disculpas por el tiempo que te hicimos perder! Vamos a trabajar fuertemente para mejorar! ");
        break;
}

