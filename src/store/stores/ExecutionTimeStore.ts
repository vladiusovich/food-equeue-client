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

    public get time(): number | null {
        return this.apiProvider?.data?.executionTime ?? null;
    }
}

export default ExecutionTimeStore;