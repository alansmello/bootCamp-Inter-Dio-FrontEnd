const getAdmins = (mapa)=>{
    let admin = [];

    for([key,value] of mapa){
        if(value === 'Admin'){
            admin.push(key);
        }
    }
    return admin;
}

const mapa = new Map();
mapa.set('Luiz', 'Admin');
mapa.set('Alan', 'Gerente');
mapa.set('Sabrina', 'Financeiro');
mapa.set('Cauã', 'Admin');
mapa.set('Indio', 'Faxina');
mapa.set('Caíco', 'Admin');

console.log(getAdmins(mapa));