var express = require('express');
var router = express.Router();

const {
    getAllBreed,
    getBreedByID,
    searchBreedByName,
    getRandomImage
} = require("../requests/catAPIRequests");

router.get('/', async (req, res) => {
    try {
        const breeds = await getAllBreed();

        return res.json({
            status: 200,
            success: true,
            data: breeds,
            count: breeds.length
        })
    } catch (error) {
        console.log(error);
    }
});

router.get('/breedID/:breedID', async (req, res) => {
    try {
        const breedID = req.params.breedID;
        const breed = await getBreedByID(breedID);

        return res.json({
            status: 200,
            success: true,
            data: breed,
        })
    } catch (error) {
        console.log(error);
    }
});

router.get('/search/:breedName', async (req, res) => {
    try {
        const breedName = req.params.breedName;
        const breeds = await searchBreedByName(breedName);

        return res.json({
            status: 200,
            success: true,
            data: breeds,
            count: breeds.length
        })
    } catch (error) {
        console.log(error);
    }
});

router.get('/random-image', async (req, res) => {
    try {
        const image = await getRandomImage();

        return res.json({
            status: 200,
            success: true,
            data: image
        })
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
