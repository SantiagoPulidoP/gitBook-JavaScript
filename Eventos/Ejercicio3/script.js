const changeText = () =>{
    let content1 = document.querySelector('.p1');
    let content2 = document.querySelector('.p2');

    content2.innerHTML = content1.innerHTML;
}

const erraseText = () => {
    let content2 = document.querySelector('.p2');
    content2.innerHTML ='';
}


document.querySelector('.p1').addEventListener("mouseover",changeText);
document.querySelector('.p1').addEventListener("mouseout",erraseText);