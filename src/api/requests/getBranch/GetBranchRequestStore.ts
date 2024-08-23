import RequestStore from "@api/core/RequestStore";
import Branch from "@type/branches/Branch";

type RequestDataType = {
    id: string | number;
};

class GetBranchRequestStore extends RequestStore<RequestDataType, Branch> {
    constructor() {
        super({
            method: 'get',
            url: '/branches',
            useParams: true,
            cacheTimeInSeconds: Infinity,
        });
    }
}

export default GetBranchRequestStore;