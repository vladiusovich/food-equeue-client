import { makeObservable, observable, action, computed } from "mobx"
import SocketApiProvider from "../../services/dataProvider/SocketApiProvider";
import AuthStore from "./Auth";

// TODO: Implement UserStore when api is ready
class UserStore {
    private apiProvider: SocketApiProvider;
    public auth: AuthStore;

    constructor(apiProvider: SocketApiProvider, auth: AuthStore) {
        this.auth = auth;

        makeObservable(this, {
            orderId: computed,
        });

        this.apiProvider = apiProvider;
    }

    public get orderId(): string {
        return '1';
    }
}

export default UserStore;