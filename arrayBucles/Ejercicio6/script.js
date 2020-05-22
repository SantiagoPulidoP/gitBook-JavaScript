/* Usando for...of vamos a hacer un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. Cuando esta pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra. */

function check(e){
    let pelis = [];
    pelis.push(document.getElementById('movie1').value);
    pelis.push(document.getElementById('movie2').value);


    for(let i of pelis){
        console.log(`A mi tambien me encató ${i}!`);
    }









}


document.getElementById('submit').addEventListener('click',check);