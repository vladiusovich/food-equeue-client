import RequestStore from "@api/core/RequestStore";
import Branch from "@type/branches/Branch";

type RequestDataType = {
    orderId: string;
};

class GetBranchRequestStore extends RequestStore<RequestDataType, Branch> {
    constructor() {
        super({
            method: 'get',
            url: '/branches',
            useParams: true,
        });
    }
}

export default GetBranchRequestStore;