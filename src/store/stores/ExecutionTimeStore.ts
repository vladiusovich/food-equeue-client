import { makeObservable, observable, action, runInAction, computed } from "mobx"
import SocketApiProvider from "../../services/dataProvider/SocketApiProvider";

class ExecutionTimeStore {
    private apiProvider: SocketApiProvider;

    constructor(apiProvider: SocketApiProvider) {
        makeObservable(this, {
            time: computed,
        });

        this.apiProvider = apiProvider;
    }

    public get time() {
        return this.apiProvider.data.executionTime;
    }
}

export default ExecutionTimeStore;