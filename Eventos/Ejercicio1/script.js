const changeText = ()=>{
    let content = document.querySelector('.text');
    content.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
}


document.getElementById('submit').addEventListener("click",changeText);