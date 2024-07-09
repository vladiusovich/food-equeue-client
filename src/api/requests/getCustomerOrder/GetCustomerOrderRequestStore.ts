import RequestStore from "@api/core/RequestStore";
import CustomerOrderInfo from "@type/customer/CustomerOrderInfo";

// TODO: do not use an param. request have to be based on token
type RequestDataType = {
    hash: string;
};

class GetCustomerOrderRequestStore extends RequestStore<RequestDataType, CustomerOrderInfo> {
    constructor() {
        super({
            method: 'post',
            url: '/customer/order',
        });
    }
}

export default GetCustomerOrderRequestStore;