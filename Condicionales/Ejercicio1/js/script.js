const url = '<img src="http://placehold.it/300x300" alt="avatar">';

var next = '';

let box = document.querySelector('.image');

if(url === ''){
    next = '<img src="http://www.fillmurray.com/300/300" alt="alternative">';
    box.innerHTML = next;
}else{
    box.innerHTML = url;
}
