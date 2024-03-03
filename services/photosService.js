const axios = require('axios');
require('dotenv').config();
const accessToken = process.env.ACCESS_TOKEN;

async function getPhotos(queryParams) {
    try {
        const response = await axios.get(`https://graph.facebook.com/me/photos?fields=link,created_time,album{name}&limit=100&access_token=${accessToken}`);
        let albumSearch = queryParams.album;

        let responseData = response.data.data.map(item => ({
            link: item.link,
            created_time: item.created_time,
            album: item.album?.name || "none"
        }));
        if (albumSearch) {
            responseData = responseData.filter(photo => photo.album !== "none" ? photo.album.toLowerCase().includes(albumSearch.toLowerCase()) : false);
        }
        let total = responseData.length;
        responseData.unshift({ total });
        return responseData;
    } catch (error) {
        throw new Error('Error al obtener fotos del perfil');
    }
}

module.exports = {
    getPhotos
};
