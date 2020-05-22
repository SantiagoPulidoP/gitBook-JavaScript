    const img = document.querySelector('img');
    let breed =[];
    fetch('https://dog.ceo/api/breed/hound/images')
    .then(response => response.json())
    .then(breedList =>{
         breed = breedList.message;
        return fetch('https://api.rand.fun/number/integer?max=1000')
    })
    .then(response => response.json())
    .then(num =>{
        img.src =breed[num.result]
        img.alt = 'perro';
    })