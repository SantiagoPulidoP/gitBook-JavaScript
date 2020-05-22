document.querySelector('.resultados').style.display ='none';


let name_ = document.querySelector('.name');
let photo = document.querySelector('.photo');
let num = document.querySelector('.num-repo');



function search() {

    
    let user = document.getElementById('user').value;
    let url = `https://api.github.com/users/${user}`;
    console.log(url);
    fetch(url)
    .then(response=>response.json())
    .then(data =>{
        name_.innerHTML = data.name;
        photo.src = data.avatar_url;
        num.innerHTML = data.public_repos;
   


    } );

    document.querySelector('.resultados').style.display ='block';

    
}




document.getElementById('buscar').addEventListener('click',search)