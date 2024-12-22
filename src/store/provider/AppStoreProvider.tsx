import React from "react";
import { observer } from "mobx-react-lite";
import AppStoreContext from "./AppStoreContext";
import appStore from "../initStore";
import ApiEndpointSingletone from "@api/core/ApiEndpointSingletone";

interface PropsType {
    children: React.ReactNode;
}

const AppStoreProvider: React.FC<PropsType> = ({ children }) => {
    // set acces to store for api request's interceptors
    ApiEndpointSingletone.setStore(appStore);

    return (
        <AppStoreContext.Provider value={appStore}>
            {children}
        </AppStoreContext.Provider>
    );
};

export default observer(AppStoreProvider);
