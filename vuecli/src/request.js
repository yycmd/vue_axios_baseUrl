import axios from "axios";

let request;

if (!request) {
    await fetch('/config.json').then(res => res.json()).then((jsonRes) => {
        request = axios.create({
            baseURL: jsonRes.url,
            timeout: 1000,
        });
    });
}
export default request;

