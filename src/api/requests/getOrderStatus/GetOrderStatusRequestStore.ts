import RequestStore from "@api/core/RequestStore";
import OrdersStatus from "@type/orders/OrdersStatus";

type RequestDataType = void;

class GetOrderStatusRequestStore extends RequestStore<RequestDataType, OrdersStatus> {
    constructor() {
        super({
            method: 'get',
            url: '/orders',
            // cacheTimeInSeconds: 60,
        });
    }
}

export default GetOrderStatusRequestStore;