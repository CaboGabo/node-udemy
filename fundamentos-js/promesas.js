let empleados = [{
    id:1,
    nombre: 'Gabriel'
},{
    id:2,
    nombre: 'Alberto'
}, {
    id:3,
    nombre: 'Heber'
}];

let salarios = [{
    id: 1,
    salario: 15000
}, {
    id: 2,
    salario: 6500
}];

const getEmpleado = (id) => {
    return new Promise((resolve,reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if(!empleadoDB) {
            reject(`No existe un empleado con el id ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

const getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => empleado.id === salario.id);
        if(!salarioDB) {
            reject(`No existe un salario para ${empleado.nombre}`);
        } else {
            resolve({nombre: empleado.nombre,
                    salario: salarioDB.salario});
        }
    })
}

getEmpleado(3).then(empleado => {
    return getSalario(empleado);
}).then( resp => {
    console.log(resp);
}).catch( err => console.log(err))
