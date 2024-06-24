import { makeObservable, observable, action, runInAction, computed } from "mobx"
import SocketApiProvider from "../../services/dataProvider/SocketApiProvider";

class OrdersStore {
    private apiProvider: SocketApiProvider;

    constructor(apiProvider: SocketApiProvider) {
        makeObservable(this, {
            ordersStatus: computed,
        });

        this.apiProvider = apiProvider;
    }

    public get ordersStatus() {
        return this.apiProvider.data.ordersStatus;
    }
}

export default OrdersStore;