import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:2030/",
});

export default instance;
