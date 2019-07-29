const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

const base = argv.base;
const desde = argv.desde;
const hasta = argv.hasta;

let comando = argv._[0];

switch(comando) {
    case 'listar': 
        listarTabla(base,desde,hasta);
    break;
    case 'crear':
        crearArchivo(base,desde,hasta)
            .then(archivo => console.log(`Archivo creado ${archivo.green}`))
            .catch(e => console.log(e));
    break;
    default:
        console.log('Comando no reconocido');
}
