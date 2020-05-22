let arr = [1,2,3];




let lista = document.querySelector('.list');

for(let i=0 ; i<arr.length ; i++){
    let item = document.createElement('li');
    let cont = document.createTextNode(arr[i]);
    item.appendChild(cont);
    lista.appendChild(item);
}