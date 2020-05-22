const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";


const changeText = (e)=>{
    let content = document.querySelector(".list");
    content.innerHTML = `<li class='inception'>${inception}</li><li class='butterfly'>${theButterFlyEffect}</li><li class='eternal'>${eternalSunshineOfTheSM}</li><li class='blue'>${blueVelvet}</li><li class='split'>${split}</li>`;

    content.addEventListener('click',(e)=>{
        console.dir(e.target);
    });
   

    

}



document.getElementById("empezar").addEventListener("click", changeText);
