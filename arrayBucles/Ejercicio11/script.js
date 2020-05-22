let n = 9;
let aux = 0;
let car ='*';

let espacios = n-1;


function generateSpace(cant){
    let esp='';
    for(let i=0 ; i<cant/2 ; i++){
        esp+=' ';
    }

    return esp;
}


while(aux<n){
    console.log(`${generateSpace(espacios)}${car}`);
    car+='**';
    aux+=2;
    espacios-=2;
}