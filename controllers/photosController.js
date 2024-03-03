const photoService = require('../services/photosService');

async function getPhotos(req, res) {
    try {
        const photosData = await photoService.getPhotos(req.query);
        res.status(200).json(photosData);
    } catch (error) {
        //console.error('Error al obtener fotos del perfil:', error);
        res.status(500).send('Error al obtener fotos del perfil');
    }
}

module.exports = {
    getPhotos
};


