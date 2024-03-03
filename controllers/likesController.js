const likeService = require('../services/likesService');

async function getLikes(req, res) {
    try {
        const likesData = await likeService.getLikes(req.query);
        res.status(200).json(likesData);
    } catch (error) {
        console.error('Error al obtener páginas likeadas por el usuario:', error);
        res.status(500).send('Error al obtener páginas likeadas por el usuario');
    }
}

module.exports = {
    getLikes
};





