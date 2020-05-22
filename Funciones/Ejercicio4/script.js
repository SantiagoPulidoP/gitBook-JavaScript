function calculate(bool,ancho,padding,border){
    let totalWidth=0;
    if(bool===false){
        totalWidth = ancho+padding+border;
    }else{
        totalWidth = ancho-padding-border;
    }

    return totalWidth;
}


let test1 = calculate(true,100,10,2);
let test2 = calculate(false,300,20,5);