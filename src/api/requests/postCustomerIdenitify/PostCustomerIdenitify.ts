import RequestStore from "@api/core/RequestStore";
import IdentityCustomerInfo from "@type/customer/IdentityCustomerInfo";

type RequestDataType = {
    hash: string;
};

class PostCustomerIdenitify extends RequestStore<RequestDataType, IdentityCustomerInfo> {
    constructor() {
        super({
            method: 'post',
            url: '/customer/auth/idenitify',
        });
    }
}

export default PostCustomerIdenitify;