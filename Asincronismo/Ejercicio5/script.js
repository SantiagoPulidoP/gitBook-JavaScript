let cont = 0;

const temp = () => {
  cont++;
  
  if (cont === 1) {
    console.log(`Escrito hace ${cont} segundos`);
  }
  if(cont >59){
      console.log('Escrito hace un minuto');
  }

};

setInterval(temp, 1000);

/*  */
