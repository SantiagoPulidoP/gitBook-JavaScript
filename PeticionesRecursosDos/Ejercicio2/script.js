const names = [];
const genre = [];
const getInfo = () => {
  let name = document.getElementById("avatar").value;
  let info = document.querySelector("div");
  info.innerHTML ='';
  fetch(`https://swapi.dev/api/people/?search=${name}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);

      for (let res of data.results) {
        /*  names.push(res.name)
            genre.push(res.gender) */
        info.innerHTML += `Nombre: ${res.name} <br /> Genero:${res.gender} <br/><br/>`
      }
    });
};

document.getElementById("search", search).addEventListener("click", getInfo);
