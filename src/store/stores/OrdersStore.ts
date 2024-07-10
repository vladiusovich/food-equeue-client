import { makeObservable, computed } from "mobx"
import SocketApiProvider from "../../services/dataProvider/SocketApiProvider";
import ExecutionTimeStore from "./ExecutionTimeStore";
import GetOrderStatusRequestStore from "@api/requests/getOrderStatus/GetOrderStatusRequestStore";
import UserStore from "./UserStore";
import OrdersProgressStatus from "@type/orders/OrdersProgressStatus";

const isCurrentUserOrder = (orderId: string | number, userOrderId: string | number) => (orderId === userOrderId);

// TODO: bug fix
const reorderReadyOrders = (orders: string[], userOrderId: string) => {
    const userOrderIndex = orders.findIndex((order) => isCurrentUserOrder(order, userOrderId));

    if (userOrderIndex !== -1) {
        const [userOrder] = orders.splice(userOrderIndex, 1);
        return [{ id: userOrder, isCurrent: true }, ...orders.map((order) => ({ id: order, isCurrent: false }))];
    }

    return orders.map((order) => ({ id: order, isCurrent: false }));
}

class OrdersStore {
    private apiProvider: SocketApiProvider;

    private getOrderStatusRequestStore: GetOrderStatusRequestStore = new GetOrderStatusRequestStore();

    public executionTime: ExecutionTimeStore;

    public userStore: UserStore;

    constructor(
        apiProvider: SocketApiProvider,
        executionTime: ExecutionTimeStore,
        userStore: UserStore,
    ) {
        makeObservable(this, {
            ordersProgress: computed,
        });

        this.apiProvider = apiProvider;
        this.executionTime = executionTime;
        this.userStore = userStore;

        this.getOrderStatusRequestStore.execute();
    }

    public get ordersProgress(): OrdersProgressStatus {
        const ordersStatus = this.apiProvider.data.ordersStatus ?? this.getOrderStatusRequestStore?.data;
        const userOrderId = this.userStore.orderId?.toString() ?? "";

        const inProgress = ordersStatus?.inProgress ?? [];
        const ready = ordersStatus?.ready ?? [];

        return {
            inProgress: inProgress.map((order) => ({ id: order, isCurrent: isCurrentUserOrder(order, userOrderId) })),
            ready: ready.map((order) => ({ id: order, isCurrent: isCurrentUserOrder(order, userOrderId) })),
            // ready: reorderReadyOrders(ordersStatus?.ready ?? [], userOrderId)
        };
    }
}

export default OrdersStore;