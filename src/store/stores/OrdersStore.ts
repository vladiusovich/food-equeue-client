import { makeObservable, computed } from "mobx"
import ExecutionTimeStore from "./ExecutionTimeStore";
import GetOrderStatusRequestStore from "@api/requests/getOrderStatus/GetOrderStatusRequestStore";
import UserStore from "./UserStore";
import OrdersProgressStatus from "@type/orders/OrdersProgressStatus";
import RuntimeDataStore from "../core/RuntimeDataStore";
import { RuntimeDataType } from "../types/RuntimeDataType";

const isCurrentUserOrder = (orderId: string | number, userOrderId: string | number) => (orderId === userOrderId);

class OrdersStore {
    public executionTime: ExecutionTimeStore;

    public userStore: UserStore;

    private getOrderStatusRequestStore: GetOrderStatusRequestStore = new GetOrderStatusRequestStore();

    constructor(
        private dataRepository: RuntimeDataStore<RuntimeDataType>,
        executionTime: ExecutionTimeStore,
        userStore: UserStore,
    ) {
        makeObservable(this, {
            ordersProgress: computed,
        });

        this.executionTime = executionTime;
        this.userStore = userStore;
    }

    public async fetch() {
        await this.getOrderStatusRequestStore.execute();
    }

    public get ordersProgress(): OrdersProgressStatus {
        const ordersStatus = this.dataRepository.data.ordersStatus ?? this.getOrderStatusRequestStore?.data;
        const userOrderId = this.userStore.orderId?.toString() ?? "";

        const inProgress = ordersStatus?.inProgress ?? [];
        const ready = ordersStatus?.ready ?? [];

        return {
            inProgress: inProgress.map((order) => ({ id: order, isCurrent: isCurrentUserOrder(order, userOrderId) })),
            ready: ready.map((order) => ({ id: order, isCurrent: isCurrentUserOrder(order, userOrderId) })),
        };
    }
}

export default OrdersStore;