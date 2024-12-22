import axios, { AxiosInstance } from "axios";
import appConfig from "../../config/appConfig";
import buildInterceptors from "./interceptors/interceptors"
import AppStoreType from "../../store/AppStoreType";

class ApiEndpointSingletone {
    private static instance: AxiosInstance;

    private static store: AppStoreType;

    public static setStore(store: AppStoreType) {
        ApiEndpointSingletone.store = store;
    }

    public static getInstance(): AxiosInstance {
        if (!ApiEndpointSingletone.store) {
            throw new Error("Store is not set");
        }

        if (!ApiEndpointSingletone.instance) {
            ApiEndpointSingletone.instance = axios.create({
                baseURL: appConfig.api.apiUrl,
                timeout: 3000,
            });

            const interceptors = buildInterceptors(ApiEndpointSingletone.store);

            ApiEndpointSingletone.instance.interceptors.request.use(
                interceptors.requestInterceptor.onFulfilled,
                interceptors.requestInterceptor.onRejected
            );

            ApiEndpointSingletone.instance.interceptors.response.use(
                interceptors.responseInterceptor.onFulfilled,
                interceptors.responseInterceptor.onRejected
            );
        }

        return ApiEndpointSingletone.instance;
    }
}

export { ApiEndpointSingletone };
