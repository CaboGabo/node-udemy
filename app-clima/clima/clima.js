const axios = require('axios');


const getClima = async (lat,lon) => {

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4586b6a0bf484d82b29fe7bd365851aa&units=metric`,
    });

    const respuesta = await instance.get();

    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}