const axios = require('axios');
require('dotenv').config();
const accessToken = process.env.ACCESS_TOKEN;

async function getBasicProfileData() {
    try {
        const response = await axios.get(`https://graph.facebook.com/me?fields=name,email,birthday,gender,friends&access_token=${accessToken}`);
        const { name, email, birthday, gender, friends } = response.data;
        const friendsCount = friends.summary.total_count;

        // Crear el objeto de respuesta con los datos relevantes
        const responseData = {
            name,
            email,
            birthday,
            gender,
            friends: friendsCount
        };
        return responseData;
    } catch (error) {
        throw new Error('Error al obtener información del perfil');
    }
}

module.exports = {
    getBasicProfileData
};