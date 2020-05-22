function change(){
    let state = document.getElementById('status').value;

    if(state === 'sad'){
        document.getElementById('face').innerHTML = ':(';
      }
      else{
        document.getElementById('face').innerHTML = ':)';
      }

}









document.getElementById('update').addEventListener('click',change);