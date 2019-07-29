const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    hasta: {
        alias: 'h',
        default: 10
    },
    desde: {
        alias: 'd',
        default: 1
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}