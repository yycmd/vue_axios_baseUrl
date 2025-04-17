import axios from "axios";

let request;

if (!request) {
    await fetch('/config.json').then(res => res.json()).then(({ url }) => {
        request = axios.create({
            baseURL: url,
            timeout: 1000,
        });
    });
}
export default request;

