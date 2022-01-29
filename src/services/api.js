import axios from "axios";

//http://viacep.com.br/ws/69074815/json/



const api = axios.create({
    baseURL: "http://viacep.com.br/ws/"
})

export default api