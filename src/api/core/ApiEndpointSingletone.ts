import appConfig from "../../config/appConfig";
import AppStoreType from "../../store/AppStoreType";
import ApiEndpoint from "./apiEndpoint";

class ApiEndpointSingletone {
    private static instance: ApiEndpoint;

    private static store: AppStoreType;

    public static setStore(store: AppStoreType) {
        ApiEndpointSingletone.store = store;
    }

    public static getInstance(): ApiEndpoint {
        if (!ApiEndpointSingletone.store) {
            throw new Error("Store is not set");
        }

        if (!ApiEndpointSingletone.instance) {
            ApiEndpointSingletone.instance = new ApiEndpoint({
                store: ApiEndpointSingletone.store,
                baseURL: appConfig.api.apiUrl,
                timeout: 3000,
            });
        }

        return ApiEndpointSingletone.instance;
    }
}

export default ApiEndpointSingletone;
