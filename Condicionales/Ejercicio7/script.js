let currentYear=30;
let nextbisiesto;
let mod=false;



while(mod===false){
    if (currentYear % 4 === 0  && currentYear % 100 !=0){
        mod = true;
        nextbisiesto = currentYear;
    }else{
        currentYear++;
    }
}


console.log(nextbisiesto);
