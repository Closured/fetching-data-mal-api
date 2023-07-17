import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const getAnime = async () => {
    const url = 'https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=5';
    const options = {
        headers: {
            'X-MAL-CLIENT-ID': process.env.CLIENTID
        }
    };
    const response = await axios.get(url, options);
    const data = await response.data.data;
}

const getAiring = async () => {
    const url = 'https://api.myanimelist.net/v2/anime/ranking?ranking_type=airing&limit=5';
    const options = {
        headers: {
            'X-MAL-CLIENT-ID': process.env.CLIENTID
        }
    };
    const response = await axios.get(url, options);
    const data = await response.data.data;
}

const getUpcoming = async () => {
    const url = 'https://api.myanimelist.net/v2/anime/ranking?ranking_type=upcoming&limit=5';
    const options = {
        headers: {
            'X-MAL-CLIENT-ID': process.env.CLIENTID
        }
    };
    const response = await axios.get(url, options);
    const data = await response.data.data;
}

const getPopular = async () => {
    const url = 'https://api.myanimelist.net/v2/anime/ranking?ranking_type=bypopularity&limit=5';
    const options = {
        headers: {
            'X-MAL-CLIENT-ID': process.env.CLIENTID
        }
    };
    const response = await axios.get(url, options);
    const data = await response.data.data;
}

const getFavorite = async () => {
    const url = 'https://api.myanimelist.net/v2/anime/ranking?ranking_type=favorite&limit=5';
    const options = {
        headers: {
            'X-MAL-CLIENT-ID': process.env.CLIENTID
        }
    };
    const response = await axios.get(url, options);
    const data = await response.data.data;
}