const axios = require('axios');



const getLugarLatLng = async (dir) => {
    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'x-rapidapi-key': '412140005amsh2925630b532c95ap1ad1dfjsn52dbb8697f36' }
    });

    const respuesta = await instance.get();

    if(respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        direccion,
        latitud,
        longitud
    }
}

module.exports = {
    getLugarLatLng
}
