const express = require('express');
const infoController = require('../controllers/infoController');
const postsController = require('../controllers/postsController');
const photosController = require('../controllers/photosController');
const likesController = require('../controllers/likesController');

const router = express.Router();

router.get('/info',infoController.getBasicProfileInfo);
router.get('/posts', postsController.getPosts);
router.get('/photos', photosController.getPhotos);
router.get('/likes', likesController.getLikes);



module.exports = router;
