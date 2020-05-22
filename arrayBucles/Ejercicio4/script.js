/* Cada tres años se produce una luna llena completamente iluminada por el Sol durante unos minutos. Esta luna es conocida como la “Luna del cazador”. En el año 2017 se pudo ver esta luna el 5 de octubre y mucha gente se la perdió. Para que no nos pase los siguientes años vamos a crear un código que muestre en consola cuándo serán las 15 próximas lunas. */



let first = 2017;


console.log('Las proximas 15 lunas serán: ');
for(let i = 1; i<=15; i++){
    first+=3;
    console.log(`${i}. 5 de octubre del ${first}`);

}