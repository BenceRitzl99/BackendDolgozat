const express = require('express');
const router = express.Router();
const photo = require('../services/photos');

router.get('/', async (req, res, next) => {
    try{
        res.json(await photo.getPhotos());
    }
    catch(err){
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try{
        res.json(await photo.getPhotosById(req.params.id));
    }
    catch(err){
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try{
        res.json(await photo.createPhotos(req.body));
    }
    catch(err){
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try{
        res.json(await photo.updatePhotos(req.params.id, req.body));
    }
    catch(err){
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try{
        res.json(await photo.deletePhotos(req.params.id));
    }
    catch(err){
        next(err);
    }
});

router.patch('/:id', async (req, res, next) => {
    try{
        res.json(await photo.patchPhotos(req.params.id, req.body));
    }
    catch(err){
        next(err);
    }
});

module.exports = router;

