import axios from "axios";
import appConfig from "../../config/appConfig";

const instance = axios.create({
    baseURL: appConfig.apiBaseUrl,
    timeout: 3000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export default instance;