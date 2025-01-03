import axios from "axios";
const token = localStorage.getItem("stmToken");

const instance = axios.create({
    baseURL: 'http://localhost:8070',
    headers:{Authorization:`Bearer ${(token)}`}

});

export default instance;