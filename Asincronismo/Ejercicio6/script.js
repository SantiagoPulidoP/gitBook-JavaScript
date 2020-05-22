let content = document.querySelectorAll('input');

let exp = document.querySelector('h3');








const timeOut = () => {
  content.forEach((i)=>{
    document.body.removeChild(i);
  });

  exp.innerHTML = 'Su sesion ha expirado';
 
};

setTimeout(timeOut, 15000);

/*  */
