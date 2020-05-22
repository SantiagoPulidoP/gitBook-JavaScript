const geekGrirl1 = {
    name : 'Susana',
    age : 34,
    profesion: 'Periodista'
};

const geekGrirl2 = {
    name : 'Rocío',
    age : 25,
    profesion: 'Actriz'
};


document.querySelector('.girl1').innerHTML = `Mi nombre es ${geekGrirl1.name}, tengo ${geekGrirl1.age} años y soy ${geekGrirl1.profesion}`;


document.querySelector('.girl2').innerHTML = `Mi nombre es ${geekGrirl2.name}, tengo ${geekGrirl2.age} años y soy ${geekGrirl2.profesion}`;


