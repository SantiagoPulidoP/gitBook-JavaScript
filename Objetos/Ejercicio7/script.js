const job = 'developer';
const user = {};


user.firstName = 'Santiago';
user.lastName = 'Pulido';
user.age = 22;
user['job'] = job;



function changeUserName(obj,newName){
    obj.firstName = newName;
}

function oneMoreYear(obj){
    obj.age+=1;

}