import axios from "axios";
import appConfig from "../../config/appConfig";
import { ACCESS_TOKEN } from "../../const/authConstans";

const instance = axios.create({
    baseURL: appConfig.api.apiUrl,
    timeout: 3000,
    // headers: {'X-Custom-Header': 'foobar'}
});

// TODO
// Add a request interceptor
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        // Handle the error
        return Promise.reject(error);
    }
);

export default instance;