import axios from "axios"

const apiKey= import.meta.env.VITE_APIKEY
const baseUrl= import.meta.env.VITE_BASEURL

export const getPopularList = async () => {
    const popularMovie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)
    return popularMovie.data.results
}

export const getTopList = async () => {
    const topMovie = await axios.get(`${baseUrl}/movie/top_rated?page=1&api_key=${apiKey}`)
    return topMovie.data.results 
}

export const getNowPlayingList = async () => {
    const nowPlaying = await axios.get(`${baseUrl}/movie/now_playing?page=1&api_key=${apiKey}`)
    return nowPlaying.data.results
}

export const searchMovie = async (p) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${p}&page=1&api_key=${apiKey}`)
    return search.data
}