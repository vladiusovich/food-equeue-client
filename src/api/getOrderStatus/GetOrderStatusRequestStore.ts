import RequestStore from "@api/core/RequestStore";
import Branch from "@type/branches/Branch";
import OrdersStatus from "@type/orders/OrdersStatus";

type RequestDataType = void;

class GetOrderStatusRequestStore extends RequestStore<RequestDataType, OrdersStatus> {
    constructor() {
        super({
            method: 'get',
            url: '/orders',
        });
    }
}

export default GetOrderStatusRequestStore;