document.body.style.background = "black";
document.body.style.color = "white";
document.body.style.fontFamily = '"Walter Turncoat", cursive';

for (let i = 0; i < 100; i++) {
  let p = document.createElement("p");
  let hello = document.createTextNode(
    "He aprendido bien comoo funcionan los bucles"
  );
  p.appendChild(hello);
  p.appendChild(createSelect());
  document.body.appendChild(p);
 
}

function createSelect(){
    
    let sel = document.createElement("select")
    let opt1 = document.createElement('option')
    let blanco = document.createTextNode('Blanco');
    opt1.appendChild(blanco);
    opt1.value = 'blanco';
    sel.appendChild(opt1);
    
    let opt2 = document.createElement('option')
    let azul = document.createTextNode('Azul');
    opt2.appendChild(azul);
    opt2.value = 'azul';
    sel.appendChild(opt2);
    
    let opt3 = document.createElement('option')
    let rojo = document.createTextNode('Rojo');
    opt3.appendChild(rojo);
    opt3.value = 'rojo';
    sel.appendChild(opt3);

    sel.style.marginLeft = '20px';
    
    return sel;
}


let selArr = document.querySelectorAll('select');

selArr.forEach(item => {
    item.addEventListener('change',(e)=>{
        if(item.value==='blanco'){
            e.currentTarget.parentElement.style.color = 'white';
        }else if(item.value==='azul'){
            e.currentTarget.parentElement.style.color = 'blue';
        }else if(item.value==='rojo'){
            e.currentTarget.parentElement.style.color = 'red';
        }
    })
})