const main = document.querySelector('.main');

var war = (main.classList.contains('warning')) ? true : false;
var err =  main.classList.contains('error') ? true : false;
var succ = main.classList.contains('success') ? true :false;

if(war===true){
    document.querySelector('h1').innerHTML = 'AVISO'; 
    document.querySelector('p').innerHTML = 'Tenga Cuidado';
}

if(err === true){
    document.querySelector('h1').innerHTML = 'ERROR';
    document.querySelector('p').innerHTML = 'Ha surgido un error'; 
}

if(succ === true){
    document.querySelector('h1').innerHTML = 'CORRECTO';
    document.querySelector('p').innerHTML = 'Los datos son correctos';
}


