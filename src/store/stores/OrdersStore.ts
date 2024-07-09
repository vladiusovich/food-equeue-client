import { makeObservable, computed } from "mobx"
import SocketApiProvider from "../../services/dataProvider/SocketApiProvider";
import ExecutionTimeStore from "./ExecutionTimeStore";
import GetOrderStatusRequestStore from "@api/requests/getOrderStatus/GetOrderStatusRequestStore";

class OrdersStore {
    private apiProvider: SocketApiProvider;

    private getOrderStatusRequestStore: GetOrderStatusRequestStore = new GetOrderStatusRequestStore();

    public executionTime: ExecutionTimeStore;

    constructor(apiProvider: SocketApiProvider, executionTime: ExecutionTimeStore) {
        makeObservable(this, {
            ordersStatus: computed,
        });

        this.apiProvider = apiProvider;
        this.executionTime = executionTime;

        this.getOrderStatusRequestStore.execute();
    }

    public get ordersStatus() {
        return this.apiProvider.data.ordersStatus ?? this.getOrderStatusRequestStore?.data;
    }
}

export default OrdersStore;