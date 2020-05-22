const main = document.querySelector('.main');

if(main.classList.contains('warning')){
    document.querySelector('h1').innerHTML = 'AVISO';
    document.querySelector('p').innerHTML = 'Tenga Cuidado';
}else if(main.classList.contains('error')){
    document.querySelector('h1').innerHTML = 'ERROR';
    document.querySelector('p').innerHTML = 'Ha surgido un error';

}else if(main.classList.contains('success')){
    document.querySelector('h1').innerHTML = 'CORRECTO';
    document.querySelector('p').innerHTML = 'Los datos son correctos';

}
