function saludar (){
    console.log("Bienvenido a Tú Crédito")
}

saludar();

let resultado = 0; 
let tiempo = 0;
function montoDeuda (parametro1, parametro2){
    resultado = (parametro1 * (parametro2/100+1))
}
function tiempoPago (parametro1, parametro2){
    tiempo = (parametro1 / parametro2)
}
function mostrar (mensaje){
console.log (mensaje)
}

let nombreCliente = prompt (" Completa con tu nombre : ( Para salir escribi : Salir ) ");
while (nombreCliente != "salir"){
        let montoPedido = parseFloat (prompt( " Contanos cual es el monto que vas a pedir prestado : "));
        let tasaInteres = parseFloat (prompt( " Ahora decinos cuál es la tasa de intéres anual que te ofrecen (Por ejemplo 20 % ) : "));
        let salario = parseFloat (prompt( " Y por último ingresa el monto de tu cuota ideal a pagar por mes : "));
    

montoDeuda (montoPedido, tasaInteres);
mostrar (resultado);
tiempoPago ( (montoPedido * (tasaInteres/100+1)), salario);
mostrar (tiempo);

console.log ( " Tu deuda total va a ser de : $  " + resultado );
console.log ( " Y el tiempo que demoraras en cancelar tu deuda va a ser de : " + tiempo + " meses  o " + tiempo/12 + "  años "  );
let opinion = prompt ("Contanos que te parecio nuestro simulador crediticio! Podes completar con : 1-muy bueno 2-bueno 3-malo :  ")

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


nombreCliente= prompt (" Completa con tu nombre : (para salir ingrese : Salir ) ");
}
