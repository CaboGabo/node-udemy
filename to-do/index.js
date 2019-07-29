const argv = require('./config/yargs').argv;
const colores = require('colors');
const porHacer = require('./to-do/to-do');

let comando = argv._[0];

switch(comando) {
    case 'crear':
        porHacer.crear(argv.descripcion);
    break;

    case 'listar':
        let listado = porHacer.getListado();
        console.log('===== Por hacer ====='.green);
        for(let tarea of listado) {
            console.log(tarea.descripcion.yellow);
            console.log(`Completada: ${tarea.completado ? 'Si'.green: 'No'.red}`);
        }
        console.log('====================='.green);
    break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(`${actualizado ? 'S': 'No s'}e actualizó la tarea`);
    break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(`${borrado ? 'S': 'No s'}e borró la tarea`);
    break;
    default:
        console.log('Comando no reconocido');
}