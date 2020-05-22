const geekGirl1 = {
    name : 'Susana',
    age : 34,
    profesion: 'Periodista'
   /*  runMaraton : (num) => console.log(`Estoy correindo una maraton de ${num} Km`); */
    
};



geekGirl1.run = ()=> console.log('Estoy Corriendo');
geekGirl1.runMaraton = (num) => console.log(`Estoy correindo una maraton de ${num} Km`); 
document.querySelector('.girl1').innerHTML = `Mi nombre es ${geekGirl1.name}, tengo ${geekGirl1.age} años y soy ${geekGirl1.profesion}`;





