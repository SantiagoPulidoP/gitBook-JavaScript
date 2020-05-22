let cont = document.querySelector("h3");
let temp;

const startCount = () => {
  temp = setInterval(() => {
    let value = parseInt(cont.innerHTML);
    value++;
    cont.innerHTML = value;
  }, 1000);
};

const stopCount = () => {
  clearInterval(temp);
};

document.getElementById("go").addEventListener("click", startCount);
document.getElementById("stop").addEventListener("click", stopCount);
