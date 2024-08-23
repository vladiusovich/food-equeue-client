import { makeObservable, observable } from 'mobx';
import instance from './instanceApi';

type RequestOptionsType = {
    method: 'get' | 'post' | 'put' | 'delete';
    url: string;
    useParams?: boolean;
    cacheTimeInSeconds?: number;
};

/*
    TODO:
    - Implement error resolver
    - Implement cache and test it
    - Implement loading state (unset\loading\loaded)
*/
class RequestStore<RequestDataType, ResponseDataType> {
    public data: ResponseDataType | null = null;
    public loading = false;
    public error: any = null;
    private options: RequestOptionsType;
    private cacheTimestamp: number | null = null;

    constructor(options: RequestOptionsType) {
        this.options = options;

        makeObservable(this, {
            data: observable,
            loading: observable,
            error: observable,
        });
    }

    private isCacheValid() {
        if (!this.cacheTimestamp || !this.options.cacheTimeInSeconds) return false;
        return Date.now() - this.cacheTimestamp < this.options.cacheTimeInSeconds * 1000;
    }

    public execute = async (data: RequestDataType) => {
        if (this.isCacheValid()) return;

        this.loading = true;

        try {
            const response = await instance.request<ResponseDataType>({
                ...this.options,
                data: this.options.useParams ? undefined : data,
                params: this.options.useParams ? data : undefined,
            });

            this.data = response.data;
            this.cacheTimestamp = Date.now();
        } catch (error) {
            this.error = error;
        } finally {
            this.loading = false;
        }
    }
}

export default RequestStore;
