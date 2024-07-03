import RequestStore from "@api/core/RequestStore";
import Branch from "@type/branches/Branch";

type RequestDataType = {
    orderId: string;
};

type ResponseDataType = Branch;

class GetBranchRequestStore extends RequestStore<RequestDataType, ResponseDataType> {
    constructor() {
        super({
            method: 'get',
            url: '/branches',
            useParams: true,
        });
    }
}

export default GetBranchRequestStore;