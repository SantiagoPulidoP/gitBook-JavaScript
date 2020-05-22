const changeText = ()=>{
    let content = document.querySelector('#name').value;
    console.log(`Hola! ${content}`);
}


document.getElementById('submit').addEventListener("click",changeText);