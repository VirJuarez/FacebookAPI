const axios = require('axios');
const moment = require('moment');
require('dotenv').config();
const accessToken = process.env.ACCESS_TOKEN;

async function getPosts(queryParams) {
    let since = queryParams.since ? moment(queryParams.since, 'DD-MM-YYYY').unix() : null;
    let until = queryParams.until ? moment(queryParams.until, 'DD-MM-YYYY').unix() : null;
    let limit = queryParams.limit || 20;

    // Construir la URL de la consulta a la API Graph de Facebook
    let url = `https://graph.facebook.com/me/posts?fields=message,type,created_time`;

    // Agregar los parámetros opcionales si se proporcionan
    if (since) {
        url += `&since=${since}`;
    }
    if (until) {
        url += `&until=${until}`;
    }
    url = url + `&limit=${limit}&access_token=${accessToken}`;

    try {
        // Realizar la solicitud a la API Graph de Facebook
        const response = await axios.get(url);
        let responseData = response.data.data;
        let total = responseData.length;
        responseData.unshift({ total });
        return responseData;
    } catch (error) {
        throw new Error('Error al obtener publicaciones de Facebook');
    }
}

module.exports = {
    getPosts
};
