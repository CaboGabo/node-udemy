const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima  = require('./clima/clima');

const getInfo = async (direccion) => {

    try {
        const { direccion:dir ,latitud, longitud } = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(latitud,longitud);
        return `La temperatura de ${dir} es de ${temp}`;
    } catch(err) {
        return `No se pudo determinar la temperatura de ${direccion}`;
    }
    

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
