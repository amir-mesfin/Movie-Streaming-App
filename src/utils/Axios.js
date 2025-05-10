import axios from "axios"
//a reusable Axios instance with custom default settings.
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
