let opt = document.querySelector('select');
let name = document.getElementById('name');
let apellido = document.getElementById('apellido');
let tel = document.getElementById('tel');


let info = {name:'Santiago',
            Apellido: 'Pulido',
            Telefono: 123456 };

    


opt.addEventListener('change', ()=>{
    console.log(opt.value);

    if(opt.value==='name'){
        name.value = info.name;
    }else if(opt.value==='apellido'){
        apellido.value = info.Apellido;
    }else if(opt.value==='tel'){
        tel.value = info.Telefono;
    }




})
