let cont = 0;
let temp;

const uvas = 'https://as01.epimg.net/deporteyvida/imagenes/2019/12/31/portada/1577775405_091033_1577775740_noticia_normal_recorte1.jpg';



const temp_ = () => {
    cont++;
    console.log(cont);
    if(cont==12){
        let img = document.createElement('img');
        console.log('12 uvas!')
        cont=0;
        img.src = uvas;
        document.body.appendChild(img);
        clearInterval(temp);
    }
}


temp = setInterval(temp_,1000);

