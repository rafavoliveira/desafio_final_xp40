import axios from "axios";

const api = axios.create({
    baseURL: "http://api-transformacao-digital.herokuapp.com/",
    headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})

export default api;