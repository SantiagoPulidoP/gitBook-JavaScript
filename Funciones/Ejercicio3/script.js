function iva(precio){
    let sinIva = precio;
    let iva = 2.1;
    let conIva = sinIva + iva;


    console.log(`Precio: ${sinIva}\nIva: ${iva}\nTotal: ${conIva}`);
}




iva(10);
iva(120);
iva(7500);