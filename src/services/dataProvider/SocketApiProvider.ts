import { Socket } from "socket.io-client";
import OrdersStatus from "@type/orders/OrdersStatus";
import CustomerEventType, { customerEvents } from "@type/events/CustomerEventType";

interface DataSource {
    ordersStatus: OrdersStatus;
    executionTime: number;
}

// todo: refactor
class SocketApiProvider {
    private socket: Socket;

    public data: DataSource = {} as DataSource;

    constructor(socket: Socket) {
        this.socket = socket;
        this.initSocket();
    }

    private initSocket() {
        this.socket.on('connect', () => this.connectedHandler());
        this.socket.on('disconnect', () => this.disconnectedHandler());
        this.initHandlers();
    }

    private initHandlers() {
        customerEvents.forEach((event) => {
            const handler = this.initHandler(event);
            this.socket.on(event, (data: any) => handler(data));
        });
    }

    public get isConnected() {
        return this.socket.connected;
    }

    private connectedHandler() {
        console.debug("Connected");
    }

    private disconnectedHandler() {
        console.debug("Disconnected");
    }

    private initHandler(event: CustomerEventType) {
        return (data: any) => this.eventHanlder(event, data);
    }

    private eventHanlder(event: CustomerEventType, data: any) {
        switch (event) {
            case 'customer.orders.updated':
                this.updateOrdersHandler(data);
                break;
            case 'customer.orders.executionTimeChanged':
                this.updateExecutionTimeHandler(data);
                break;
            default:
                break;
        }
    }

    private updateExecutionTimeHandler(data: number) {
        console.debug("Execution time updated", data);
        this.data.executionTime = data;
    }

    private updateOrdersHandler(data: OrdersStatus) {
        console.debug("Orders updated", data);
        this.data.ordersStatus = data;
    }
}

export default SocketApiProvider;
