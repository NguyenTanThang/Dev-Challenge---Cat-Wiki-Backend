const axios = require("axios");

const catURL = `https://api.thecatapi.com/v1`;
const getAllBreedURL = `${catURL}/breeds`;
const randomImageURL = `${catURL}/images/search`;
const getBreedByIDURL = `${catURL}/images/search?breed_id=`;
const getSearchBreedURL = `${catURL}/breeds/search?q=`;

const generateGetBreedByIDURL = (breedID) => {
    return `${getBreedByIDURL}${breedID}`
}

const generateSearchBreedsByNameURL = (breedName) => {
    return `${getSearchBreedURL}${breedName}`
}

const getAllBreed = async () => {
    try {
        const res = await axios.get(getAllBreedURL);
        const data = res.data;

        return data;
    } catch (error) {
        console.log(error);
    }
}

const getBreedByID = async (breedID) => {
    try {
        const res = await axios.get(generateGetBreedByIDURL(breedID));
        const data = res.data;

        return data;
    } catch (error) {
        console.log(error);
    }
}

const searchBreedByName = async (breedName) => {
    try {
        const res = await axios.get(generateSearchBreedsByNameURL(breedName));
        const data = res.data;

        return data;
    } catch (error) {
        console.log(error);
    }
}

const getRandomImage = async () => {
    try {
        const res = await axios.get(randomImageURL);
        const data = res.data;

        return data;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllBreed,
    searchBreedByName,
    getBreedByID,
    getRandomImage
}