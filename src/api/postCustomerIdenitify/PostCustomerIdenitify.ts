import RequestStore from "@api/core/RequestStore";
import IdentityCustomerOrderInfo from "@type/customer/IdentityCustomerOrderInfo";

type RequestDataType = {
    hash: string;
};

class PostCustomerIdenitify extends RequestStore<RequestDataType, IdentityCustomerOrderInfo> {
    constructor() {
        super({
            method: 'post',
            url: '/customer/idenitify',
        });
    }
}

export default PostCustomerIdenitify;