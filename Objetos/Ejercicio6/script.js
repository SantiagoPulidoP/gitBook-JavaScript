const contador = {
    valMax : 100 ,
    valMin : 0,
    valActual : 0,
    valInicial : 0,

    setInit (inicial){
        if(inicial<0 || inicial > 100){
            console.log('Valor no permitido');
        }
        else{
            this.valActual = inicial;
            this.valInicial = inicial;
        }
    },
    
    reset(){
        this.valInicial=0;
        this.valActual = 0;
    },

    aumentar(val){
        if(this.valActual<100){
            
            this.valActual+=val;
        }else{
            console.log('Se ha exedido el valor maximo');
        }
    }, 

    disminuir(val){
        if(this.valActual>0){
            this.valActual-=val;
        }else{
            console.log('Por debajo de valor minimo')
        }
    }

}