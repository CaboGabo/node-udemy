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
}]

let getEmpleado = (id,callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if(!empleadoDB) {
        callback(`No existe un empleado con el id ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado,callback) => {
    let salario = salarios.find(salario => empleado.id === salario.id);

    if(!salario) {
        callback(`No existe un salario para ${empleado.nombre}`, {nombre:'', salario:''});
    } else {
        callback(null, {nombre: empleado.nombre,
                        salario: salario.salario});
    }
}

getEmpleado(3, (err,empleado) => {
    if(err) return console.log(err);
    getSalario(empleado, (err,{nombre,salario}) => {
        if(err) return console.log(err);
        console.log(`El salario de ${nombre} es de $${salario}`);
    });
});

