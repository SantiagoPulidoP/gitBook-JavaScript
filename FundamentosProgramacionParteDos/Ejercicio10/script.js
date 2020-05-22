//Calcular las horas que hemos vivido

let edad = document.querySelector('.edad').innerHTML;

edad = parseInt(edad);

let horasVividas = edad*365*24;


document.querySelector('.outcome').innerHTML = `Has vivido ${horasVividas} horas`;

console.log(horasVividas);