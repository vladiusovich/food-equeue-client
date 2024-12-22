import appConfig from "../../config/appConfig";
import AppStoreType from "../../store/AppStoreType";
import ApiEndpointInstance from "./ApiEndpointInstance";

class ApiEndpointSingletone {
    private static instance: ApiEndpointInstance;

    private static store: AppStoreType;

    public static setStore(store: AppStoreType) {
        ApiEndpointSingletone.store = store;
    }

    public static getInstance(): ApiEndpointInstance {
        if (!ApiEndpointSingletone.store) {
            throw new Error("Store is not set");
        }

        if (!ApiEndpointSingletone.instance) {
            ApiEndpointSingletone.instance = new ApiEndpointInstance({
                store: ApiEndpointSingletone.store,
                baseURL: appConfig.api.apiUrl,
                timeout: 3000,
            });
        }

        return ApiEndpointSingletone.instance;
    }
}

export default ApiEndpointSingletone;
