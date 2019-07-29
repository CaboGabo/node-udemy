const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(todo => todo.descripcion === descripcion);
    
    if(index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let nuevoPorHacer = listadoPorHacer.filter(todo => todo.descripcion !== descripcion);
    if(nuevoPorHacer === listadoPorHacer) {
        return false;
    } else {
        listadoPorHacer = nuevoPorHacer;
        guardarDB();
        return true;
    }
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if(err) throw err;
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch(err) {
        listadoPorHacer = [];
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}