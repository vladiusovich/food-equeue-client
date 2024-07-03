import { makeObservable, observable, action, computed } from "mobx"
import SocketApiProvider from "../../services/dataProvider/SocketApiProvider";

// TODO: Implement UserStore when api is ready
class UserStore {
    private apiProvider: SocketApiProvider;

    constructor(apiProvider: SocketApiProvider) {
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