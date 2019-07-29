const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base,desde,hasta) => {
    return new Promise((resolve,reject) => {
        if(isNaN(base)) {
            reject(`La base ${base} no es un número`);
        }
        if(isNaN(desde)) {
            reject(`El limite ${desde} no es un número`);
        }
        if(isNaN(hasta)) {
            reject(`El limite ${hasta} no es un número`);
        }
        let data = '';
        for(let i=desde; i<=hasta; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, err => {
            if(err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    });
    
}

const listarTabla = (base,desde,hasta) => {
    if(isNaN(base)) {
        return console.log(`La base ${base} no es un número`);
    }
    if(isNaN(desde)) {
        return console.log(`El limite ${desde} no es un número`);
    }
    if(isNaN(hasta)) {
        return console.log(`El limite ${hasta} no es un número`);
    }

    console.log('============================================='.green);
    console.log(`=================Tabla de ${base}==================`.green);
    console.log('============================================='.green);
    for(let i=desde; i<=hasta; i++) {
        console.log(`${base} * ${i} = ${base*i}`.yellow);
    }
}



module.exports = {
    crearArchivo,
    listarTabla
}