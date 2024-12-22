import axios, { AxiosInstance } from "axios";
import buildInterceptors from "./interceptors/buildInterceptors"
import AppStoreType from "../../store/AppStoreType";

export interface ApiEndpointOptions {
    store: AppStoreType;
    baseURL: string;
    timeout: number;
}

export default class ApiEndpoint {
    private instance: AxiosInstance;

    constructor(options: ApiEndpointOptions) {
        this.instance = axios.create({
            ...options,
        });

        const interceptors = buildInterceptors(options.store);

        this.instance.interceptors.request.use(
            interceptors.requestInterceptor.onFulfilled,
            interceptors.requestInterceptor.onRejected
        );

        this.instance.interceptors.response.use(
            interceptors.responseInterceptor.onFulfilled,
            interceptors.responseInterceptor.onRejected
        );
    }
    public request = <T>(config: any) => {
        return this.instance.request<T>(config);
    }
}
