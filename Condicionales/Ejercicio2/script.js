
const allowed1 = 'Santiago';
const allowed2 = 'Angie';

function validate(){
    const name = document.getElementById('name').value;
    
    if (name === allowed1 || name === allowed2){
        document.querySelector(".outcome").innerHTML = `Bienvenido(a) <i>${name}</i>!`;
    }
    else{
        document.querySelector(".outcome").innerHTML = "Lo siento pero el usuario que has introducido no está registrado"
    }





}


document.getElementById('submit').addEventListener("click",validate);