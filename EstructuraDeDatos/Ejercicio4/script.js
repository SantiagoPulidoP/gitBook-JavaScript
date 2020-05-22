const users = [
    {name: 'Nymphadora Tonks', time: 9},
    {name: 'Cedric Diggory', time: 28},
    {name: 'Cho Chang', time: 35},
    {name: 'Luna Lovegood', time: 45},
    {name: 'Gregory Goyle', time: 56}
  ];


newUsers = [...users,{name:'Argus Filch ',time:78}];



function getFirst(first,...rest){
  return first;
}


let winnerInfo = getFirst(...users);

let winAux = {...winnerInfo, win:1}






/* 

 let {name : name1} = users[0];
 let {name : name2} = users[1];
 let {name : name3} = users[2];

 let {time : time1} = users[0];
 let {time : time2} = users[1];
 let {time : time3} = users[2];


 console.log(`
 Primer Puesto: ${name1}, Tiempo: ${time1}
 Segundo Puesto: ${name2}, Tiempo: ${time2}
 Tercer Puesto: ${name3}, Tiempo: ${time3}
   `) */