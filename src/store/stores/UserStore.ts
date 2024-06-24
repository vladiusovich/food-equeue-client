import { makeObservable, observable, action } from "mobx"
import SocketApiProvider from "../../services/dataProvider/SocketApiProvider";

// TODO: Implement UserStore when api is ready
class UserStore {
    private apiProvider: SocketApiProvider;

    constructor(apiProvider: SocketApiProvider) {
        makeObservable(this, {
        });

        this.apiProvider = apiProvider;
    }
}

export default UserStore;