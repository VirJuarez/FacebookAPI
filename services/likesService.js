const axios = require('axios');
require('dotenv').config();
const accessToken = process.env.ACCESS_TOKEN;

async function getLikes(queryParams) {
    try {
        const response = await axios.get(`https://graph.facebook.com/me/likes?fields=about,name,created_time,followers_count&limit=100&access_token=${accessToken}`);
        let minFollowers = queryParams.followers;
        let pages = response.data.data;
        if (minFollowers) {
            pages = pages.filter(page => page.followers_count >= minFollowers);
        }
        let total = pages.length;
        pages.unshift({ total });
        return pages;
    } catch (error) {
        throw new Error('Error al obtener páginas likeadas por el usuario');
    }
}

module.exports = {
    getLikes
};
