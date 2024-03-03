const infoService = require('../services/infoService');

async function getBasicProfileInfo(req, res) {
    try {
        const profileData = await infoService.getBasicProfileData();
        res.status(200).json(profileData);
    } catch (error) {
        //console.error('Error al obtener información del perfil:', error);
        res.status(500).send('Error al obtener información del perfil');
    }
}

module.exports = { getBasicProfileInfo };
