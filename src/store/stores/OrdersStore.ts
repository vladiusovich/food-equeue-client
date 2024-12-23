import { makeObservable, computed } from "mobx"
import ExecutionTimeStore from "./ExecutionTimeStore";
import GetOrderStatusRequestStore from "@api/requests/getOrderStatus/GetOrderStatusRequestStore";
import UserStore from "./UserStore";
import OrdersProgressStatus from "@type/orders/OrdersProgressStatus";
import RuntimeDataStore from "../core/RuntimeDataStore";
import { RuntimeDataType } from "../types/RuntimeDataType";

type OrderStateType = {
    id: string;
    isCurrent: boolean;
};

const isCurrentUserOrder = (orderId: string | number, userOrderId: string | number) => (orderId === userOrderId);

const mapOrders = (orders: string[], userOrderId: string): OrderStateType[] => {
    return orders
        .map((order) => ({
            id: order,
            isCurrent: isCurrentUserOrder(order, userOrderId)
        }));
};

const sortForBoard = (a: OrderStateType, b: OrderStateType) => {
    if (a.isCurrent && !b.isCurrent) {
        return -1;
    }

    if (!a.isCurrent && b.isCurrent) {
        return 1;
    }

    return parseInt(b.id) - parseInt(a.id);
};

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
            inProgress: mapOrders(inProgress, userOrderId).sort(sortForBoard),
            ready: mapOrders(ready, userOrderId).sort(sortForBoard),
        };
    }
}

export default OrdersStore;