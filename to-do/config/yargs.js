const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea por hacer',opts)
    .command('actualizar', 'Actualiza el estado de una tarea', {
        ...opts,
        completado: {
            alias: 'c',
            default: true,
            desc: 'Indica si la tarea se ha completado'
        }
    })
    .command('borrar', 'Borra una tarea por hacer', opts)
    .help()
    .argv;

module.exports = {
    argv
}