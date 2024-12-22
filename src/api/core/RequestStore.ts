import { makeObservable, observable, runInAction } from 'mobx';
import apiEndpoint from './apiEndpoint';

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

        runInAction(() => {
            this.loading = true;
        });

        try {
            const response = await apiEndpoint.request<ResponseDataType>({
                ...this.options,
                data: this.options.useParams ? undefined : data,
                params: this.options.useParams ? data : undefined,
            });

            runInAction(() => {
                this.data = response.data;
            });

            this.cacheTimestamp = Date.now();
        } catch (error) {
            runInAction(() => {
                this.error = error;
            });

            // TODO: Implement error resolver
            // throw error;
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    }
}

export default RequestStore;
