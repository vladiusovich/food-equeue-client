import OrdersStatus from "@type/orders/OrdersStatus";
import { makeObservable, observable, action, runInAction } from "mobx"
import { Socket } from "socket.io-client"

// TODO: separate socket.io-client from the store
class OrdersStore {
    private socket: Socket;

    public data?: OrdersStatus | null = null;

    public isConnected: boolean = false;

    constructor(socket: Socket) {
        makeObservable(this, {
            data: observable,
            isConnected: observable,
            connectedHandler: action,
            disconnectedHandler: action,
            updateOrdersHandler: action,
        });

        this.socket = socket;

        this.initSocket();
    }

    initSocket() {
        this.socket.on('connect', () => this.connectedHandler());
        this.socket.on('disconnect', () => this.disconnectedHandler());

        this.socket.on("customer.orders.updated", (orders: OrdersStatus) => this.updateOrdersHandler(orders));
    }
    connectedHandler() {
        console.log("Connected");

        runInAction(() => {
            this.isConnected = true;
        });
    }

    disconnectedHandler() {
        console.log("Disconnected");
        runInAction(() => {
            this.isConnected = false;
        });
    }

    updateOrdersHandler(orders: OrdersStatus) {
        runInAction(() => {
            this.data = orders;
        });
    }
}

export default OrdersStore;