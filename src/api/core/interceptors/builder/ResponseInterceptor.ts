import Interceptor, { InterceptorType } from "./Interceptor";

class InterceptorBuilder {
    private fulfilledInterceptors: InterceptorType[] = [];
    private rejectedInterceptors: InterceptorType[] = [];

    constructor() { }

    public addFulfilled = (callback: InterceptorType) => {
        this.fulfilledInterceptors.push(callback);
        return this;
    };

    public addRejected = (callback: InterceptorType) => {
        this.rejectedInterceptors.push(callback);
        return this;
    };

    public build = () => {
        this.fulfilledInterceptors.reverse();
        this.rejectedInterceptors.reverse();

        return new Interceptor(this.fulfilledInterceptors, this.rejectedInterceptors);
    }
}

export default InterceptorBuilder;