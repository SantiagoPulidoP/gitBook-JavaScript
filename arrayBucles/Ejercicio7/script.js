/* Estamos en una clase de Academia Geek, y queremos conocer algunas estadísticas sobre las geek girls de esa clase. Estos son sus datos:
María, 29 años, diseñadora
Lucía, 31 años, ingeniera química
Susana, 34 años, periodista
Rocío, 25 años, actriz
Inmaculada, 21 años, diseñadora
En primer lugar, vamos a crear una estructura de datos en JavaScript para manejar estos datos. Usaremos arrays y objetos para crearla.
Después, vamos a crear varias funciones en JavaScript que nos permitan calcular de forma automática estadísticas sobre las geek girls. Todas ellas toman como parámetro un listado de geek girls similar a nuestra estructura de datos anterior.
Una función countGeekGirls que devuelve el número de geek girls en el listado.
Una función averageAge que devuelve la media de edad de listado.
Una función theYoungest que devuelve el nombre de la geek girl más joven.
Una función countDesigners que devuelve el número de geek girls que son diseñadoras.
Según se vayan creando las funciones, debes ir probando que funcionan invocando con nuestra estructura de datos como argumento. Al final, debes modificar la estructura de datos para añadir, modificar o quitar geek girls. Y probad que las funciones siguen devolviendo el valor correcto. */

const geekGirls = [
  { name: "María", age: 29, study: "Diseñadora" },
  { name: "Lucía", age: 31, study: "Ing.Química" },
  { name: "Susana", age: 34, study: "Periodista" },
  { name: "Rocío", age: 25, study: "Actriz" },
  { name: "Inmaculada", age: 21, study: "Diseñadora" },
];

function countGeekGirls(list) {
  return list.length;
}

function averageAge(list) {
  let sum = 0;
  for (let i of list) {
    sum += i.age;
  }

  return sum / countGeekGirls(list);
}

function theYoungest(list) {
  let min = 10000;
  for (let girl of list) {
    if (girl.age < min) {
      min = girl.age;
    }
  }

  return min;
}


function countDesigners(list){
    let cant = 0;
    for(let girl of list){
        if(girl.study === 'Diseñadora'){
            cant++;
        }
    }

    return cant;

}


geekGirls[0].age = 20;
const otherGeek = {name:'Juana',age:19,study:'Diseñadora'};


geekGirls[5]=otherGeek;
