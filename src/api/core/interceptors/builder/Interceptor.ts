export type InterceptorType = (value: any) => void;

class Interceptor {
    constructor(
        private fulfilledInterceptors: InterceptorType[],
        private rejectedInterceptors: InterceptorType[],
    ) { }

    public onFulfilled = async (value: any) => {
        this.fulfilledInterceptors.forEach((callback) => {
            callback(value);
        });

        return Promise.resolve(value);
    }

    public onRejected = async (error: any) => {
        this.rejectedInterceptors.forEach((callback) => {
            callback(error);
        });

        return Promise.reject(error);
    }
}

export default Interceptor;