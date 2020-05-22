const savelocalStorage = (name,data) =>{
  localStorage.setItem(name,JSON.stringify(data));
}

const getLocalStorage = key => JSON.parse(localStorage.getItem(key));




const getInfo = () => {
  let name = document.getElementById("avatar").value;
  let info = document.querySelector("div");
  info.innerHTML ='';

  if(getLocalStorage('response')[0].name===name){
    let results = getLocalStorage('response')
    for(res of results){
      info.innerHTML += `Nombre: ${res.name} <br /> Genero:${res.gender} <br><br/>`
    }
  }
  else{
    
    fetch(`https://swapi.dev/api/people/?search=${name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results,'llegaroooon');
        savelocalStorage('response',data.results);  
  
        for (let res of data.results) {
        
          info.innerHTML += `Nombre: ${res.name} <br /> Genero:${res.gender} <br/><br/>`
        }
      });

  }



};

document.getElementById("search", search).addEventListener("click", getInfo);

/* 
const info = [
  {'name':'Santiago'},
  {'age':22},
  {'hobbie': 'Music'}
];

savelocalStorage('data',info);

let p = getLocalStorage('data'); */