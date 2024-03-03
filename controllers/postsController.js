const postService = require('../services/postsService');

async function getPosts(req, res) {
    try {
        const postsData = await postService.getPosts(req.query);
        res.status(200).json(postsData);
    } catch (error) {
        //console.error('Error al obtener publicaciones de Facebook:', error);
        res.status(500).send('Error al obtener publicaciones de Facebook');
    }
}

module.exports = {
    getPosts
};


