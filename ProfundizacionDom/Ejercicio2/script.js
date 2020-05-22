let op = document.querySelector("select");
let body = document.querySelector("body");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let child;
op.addEventListener("change", () => {
  child = body.children;
  for (let i = 0; i < child.length; i++) {
    if (child[i].nodeName === "IMG") {
      body.removeChild(child[i]);
    }
  }
  
  if (op.value === "ny") {
    let item1 = document.createElement("img");
    body.appendChild(item1);
    item1.src = "./ny1.jpg";
    let item2 = document.createElement("img");
    body.appendChild(item2);
    item2.src = "./ny2.jpg";
    let item3 = document.createElement("img");
    body.appendChild(item3);
    item3.src = "./ny3.jpeg";
  } else if (op.value === "md") {
    let item1 = document.createElement("img");
    body.appendChild(item1);
    item1.src = "./md1.jpg";
    let item2 = document.createElement("img");
    body.appendChild(item2);
    item2.src = "./md2.jpg";
    let item3 = document.createElement("img");
    body.appendChild(item3);
    item3.src = "./md3.jpg";
  } else if (op.value === "ps") {
    let item1 = document.createElement("img");
    body.appendChild(item1);
    item1.src = "./ps1.jpg";
    let item2 = document.createElement("img");
    body.appendChild(item2);
    item2.src = "./pd2.jpg";
    let item3 = document.createElement("img");
    body.appendChild(item3);
    item3.src = "./ps3.jpg";
  }
});
