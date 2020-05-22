const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';



let listElement = document.querySelector('.imagenes');

let content = `<li><img src='${firstDogImage}' alt='${firstDogName}'></li>
               <li><img src='${secondDogImage}' alt='${secondDogName}'></li>
               <li><img src='${thirdDogImage}' alt='${thirdDogName}'></li>`;


listElement.innerHTML = content;