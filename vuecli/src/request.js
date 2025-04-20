import axios from "axios";

const config = require("./config.json");
const request = axios.create({
    baseURL: config.url,
    timeout: 1000,
});
export default request;

