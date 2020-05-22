var t;

function selected(e){
    let select = e.currentTarget;
    t =select;
    select.classList.toggle('teacher--selected');

   if(select.querySelector('.favorite').innerHTML==='Añadir'){
    select.querySelector('.favorite').innerHTML = 'Quitar';
   }else{
    select.querySelector('.favorite').innerHTML = 'Añadir';
   }
    
}












document.querySelector('.teacher--isra').addEventListener('click',selected);
document.querySelector('.teacher--tuerto').addEventListener('click',selected);
document.querySelector('.teacher--nasi').addEventListener('click',selected);
