let cont = 0;

let h3 = document.querySelector("h3");

const increment = () => {
  cont+=1;
  console.log(cont);
  if (cont === 10) {
    h3.innerHTML = "Te has quedado dormido?";
  }
};

function reset() {
  cont = 0;
  h3.innerHTML = "";
}

setInterval(increment, 1000);

document.getElementById("not").addEventListener("click", reset);
