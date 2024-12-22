import axios from "axios";
import appConfig from "../../config/appConfig";
import interceptors from "./interceptors/interceptors"

const apiEndpoint = axios.create({
    baseURL: appConfig.api.apiUrl,
    timeout: 3000,
});

apiEndpoint.interceptors.request.use(
    interceptors.requestInterceptor.onFulfilled,
    interceptors.requestInterceptor.onRejected
);

apiEndpoint.interceptors.response.use(
    interceptors.responseInterceptor.onFulfilled,
    interceptors.responseInterceptor.onRejected
);

export default apiEndpoint;