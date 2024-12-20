import axios from "axios";
import appConfig from "../../config/appConfig";
import { successRequestInterceptor } from "./interceptors/request";
import RefreshTokenInterceptor from "./interceptors/RefreshTokenInterceptor";

const instance = axios.create({
    baseURL: appConfig.api.apiUrl,
    timeout: 3000,
});

instance.interceptors.request.use(successRequestInterceptor);

instance.interceptors.response.use(
    (response) => response,
    new RefreshTokenInterceptor(instance).handle
);

export default instance;