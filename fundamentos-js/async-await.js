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

const getEmpleado =  async (id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if(!empleadoDB) {
        throw new Error(`No existe un empleado con el id ${id}`);
    } else {
        return empleadoDB;
    }
}

const getSalario = (empleado) => {
    let salarioDB = salarios.find(salario => empleado.id === salario.id);
    if(!salarioDB) {
        throw new Error(`No existe un salario para ${empleado.nombre}`);
    } else {
        return({nombre: empleado.nombre,
                salario: salarioDB.salario});
    }
}

const getInformacion = async (id) => {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(empleado);
    return `El salario de ${salario.nombre} es de $${salario.salario}`;
}

getInformacion(3).then((resp) => console.log(resp)).catch(err => console.log(err));
