import axios from "axios";

const API_KEY = "a3e1fa268544a1e9d663e5e61c13d743"
const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-br`

const api = axios.create({
    baseURL: BASE_URL,
});

export default api;