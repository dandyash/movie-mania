import axios from "axios";

const axios_instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    responseType: "json"
});

export default axios_instance;