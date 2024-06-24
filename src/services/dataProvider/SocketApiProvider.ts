import { Socket } from "socket.io-client";
import OrdersStatus from "@type/orders/OrdersStatus";
import CustomerEventType, { customerEvents } from "@type/events/CustomerEventType";

interface DataSource {
    ordersStatus?: OrdersStatus;
    executionTime?: number;
}

class SocketApiProvider {
    private socket: Socket;
    public data: DataSource = {} as DataSource;

    constructor(socket: Socket) {
        this.socket = socket;
        this.initSocket();
    }

    private initSocket() {
        this.socket.on('connect', this.handleConnect);
        this.socket.on('disconnect', this.handleDisconnect);
        this.initEventHandlers();
    }

    private initEventHandlers() {
        customerEvents.forEach((event) => {
            this.socket.on(event, (data: any) => this.handleEvent(event, data));
        });
    }

    public get isConnected() {
        return this.socket.connected;
    }

    private handleConnect = () => {
        console.debug("Connected");
    };

    private handleDisconnect = () => {
        console.debug("Disconnected");
    };

    private handleEvent(event: CustomerEventType, data: any) {
        switch (event) {
            case 'customer.orders.updated':
                this.handleUpdateOrders(data);
                break;
            case 'customer.orders.executionTimeChanged':
                this.handleUpdateExecutionTime(data);
                break;
            default:
                console.warn(`Unhandled event: ${event}`);
                break;
        }
    }

    private handleUpdateExecutionTime(data: number) {
        console.debug("Execution time updated", data);
        this.data.executionTime = data;
    }

    private handleUpdateOrders(data: OrdersStatus) {
        console.debug("Orders updated", data);
        this.data.ordersStatus = data;
    }
}

export default SocketApiProvider;
