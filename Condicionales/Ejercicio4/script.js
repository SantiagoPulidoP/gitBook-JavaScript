let edadPerro;
const ageFirstYear = 15;
const ageSecondYear = 9;
const ageAfter2 = 5;
let edadHumano;



function calculate(){

  const name = document.getElementById("name").value;
  edadPerro = parseInt(document.getElementById('age').value);

  if(edadPerro===1){
    edadHumano = ageFirstYear;
  }
  else if (edadPerro===2){
    edadHumano = ageFirstYear+ageSecondYear;
  }else if(edadPerro >= 3){
    edadHumano = ageFirstYear + ageSecondYear + (edadPerro-2)*ageAfter2;
  }

  document.querySelector('.outcome').innerHTML = `${name} tiene el equivalente a ${edadHumano} años humanos`;

  
}  






document.getElementById("submit").addEventListener("click",calculate);