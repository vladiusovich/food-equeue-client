import { makeObservable, observable, action, runInAction, computed } from "mobx"
import SocketApiProvider from "../../services/dataProvider/SocketApiProvider";
import ExecutionTimeStore from "./ExecutionTimeStore";

class OrdersStore {
    private apiProvider: SocketApiProvider;

    public executionTime: ExecutionTimeStore;

    constructor(apiProvider: SocketApiProvider, executionTime: ExecutionTimeStore) {
        makeObservable(this, {
            ordersStatus: computed,
        });

        this.apiProvider = apiProvider;
        this.executionTime = executionTime;
    }

    public get ordersStatus() {
        return this.apiProvider.data.ordersStatus;
    }
}

export default OrdersStore;