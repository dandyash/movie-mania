import axios from "axios";

const axios_instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default axios_instance;