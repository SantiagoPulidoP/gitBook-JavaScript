/* fetch('https://dog.ceo/api/breeds/list')
  .then(response => response.json())
  .then(data => {
    console.log('Breeds data response: ', data);
    
    const ul = document.querySelector('ul');
    const breeds = data.message;
    let ulContent = '';
    console.log(breeds)

    for (const breed of breeds) {
      const breedContent = `<li>${breed}</li>`;
      ulContent += breedContent;
    }
    ul.innerHTML = ulContent;
  });

 */



 function search(){
     let org = document.getElementById('org').value;
     let url = `https://api.github.com/orgs/${org}`
     let list = document.querySelector('ul');

     fetch(url)
     .then(response => response.json())
     .then(data => {
         const repos_url = data.repos_url;
         return fetch(repos_url)
     })
     .then(done =>done.json())
     .then(repo_name => {
         for(let name of repo_name){
             list.innerHTML += `<li>${name.name}</li>`
         };
     })



 }

  document.getElementById('buscar').addEventListener('click',search);