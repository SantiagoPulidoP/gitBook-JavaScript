function chihuahua(){
    fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then(response => response.json())
    .then(data => {
        const img = document.querySelector('img');
        img.src = data.message;
        img.alt = 'random dog'
    });
}



document.getElementById('next').addEventListener('click',chihuahua);