const express = require('express');
const router = express.Router();
const photo = require('../services/photos');

router.get('/', async (req, res, next) => {
    try{
        res.json(await photo.getPhoto());
    }
    catch(err){
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try{
        res.json(await photo.getPhotoById(req.params.id));
    }
    catch(err){
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try{
        res.json(await photo.createPhoto(req.body));
    }
    catch(err){
    }
});

router.put('/:id', async (req, res, next) => {
    try{
        res.json(await photo.updatePhoto(req.params.id, req.body));
    }
    catch(err){
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try{
        res.json(await photo.deletePhoto(req.params.id));
    }
    catch(err){
        next(err);
    }
});

router.patch('/:id', async (req, res, next) => {
    try{
        res.json(await photo.patchPhoto(req.params.id, req.body));
    }
    catch(err){
        next(err);
    }
});

module.exports = router;

