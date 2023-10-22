const express = require('express');


const { data } = require('../data');

const { getAllWeathers,getAllWeathersname ,getAllWeatherbyId, putAllWeatherbyId ,deleteAllWeatherbyId} = require('./weather.service')

const router = express.Router();

router.get('/', async (req, res) => {
    return getAllWeathers(req, res);
  
});

router.get('/:name', async (req, res) => {
    return getAllWeathersname(req, res);
});

let currentProductId = 9;
router.post('/', async (req, res) => {
    return getAllWeatherbyId(req, res);
});

router.put('/:id', async (req, res) => {
    return putAllWeatherbyId(req, res);
});

router.delete('/:id', async (req, res) => {
    return deleteAllWeatherbyId(req, res);
});



module.exports = router;
