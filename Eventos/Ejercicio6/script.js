let v ;
function text(e){
    v = e.key;
    if(v==='r'){
        document.querySelector('body').style.backgroundColor = 'red';
    }else if(v==='m'){
        document.querySelector('body').style.backgroundColor = 'purple';

    }
    
}





document.addEventListener('keypress',text);