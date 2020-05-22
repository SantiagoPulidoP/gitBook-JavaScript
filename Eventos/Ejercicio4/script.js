const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";



const hand = (e) => {
  const selected = e.currentTarget;
  console.log(selected.innerHTML);
};

const changeText = () => {
  let content = document.querySelector(".list");
  content.innerHTML = `<li class='inception'>${inception}</li><li class='butterfly'>${theButterFlyEffect}</li><li class='eternal'>${eternalSunshineOfTheSM}</li><li class='blue'>${blueVelvet}</li><li class='split'>${split}</li>`;

  let p = document.querySelector(".inception");
  let butterfly = document.querySelector(".butterfly");
  let eternal = document.querySelector(".eternal");
  let blue = document.querySelector(".blue");
  let splt = document.querySelector(".split");

  p.addEventListener("click", hand);
  butterfly.addEventListener("click", hand);
  eternal.addEventListener("click", hand);
  blue.addEventListener("click", hand);
  splt.addEventListener("click", hand);

  
};

document.getElementById("empezar").addEventListener("click", changeText);
