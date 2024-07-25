import { makeObservable, observable } from 'mobx';
import instance from './instanceApi';

type RequestOptionsType = {
    method: 'get' | 'post' | 'put' | 'delete';
    url: string;
    useParams?: boolean;
};

class RequestStore<RequestDataType, ResponseDataType> {
    public data: ResponseDataType | null = null;
    public loading = false;
    public error = null;

    private options: RequestOptionsType;

    constructor(options: RequestOptionsType) {
        this.options = options;

        makeObservable(this, {
            data: observable,
            loading: observable,
            error: observable,
        });
    }

    execute = async (data: RequestDataType) => {
        this.loading = true;

        try {
            const response = await instance.request(
                {
                    ...this.options,
                    data: this.options.useParams ? undefined : data,
                    params: this.options.useParams ? data : undefined,
                }
            );

            this.data = response.data as ResponseDataType;
        } catch (error) {
            // TODO: Implement errors handling
            // this.error = error;
        } finally {
            this.loading = false;
        }
    }
}

export default RequestStore;
