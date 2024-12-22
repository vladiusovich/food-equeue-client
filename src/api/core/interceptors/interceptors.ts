import { attachToken } from "./attachToken";
import { sessionExpired } from "./sessionExpired";
import InterceptorBuilder from "./builder/ResponseInterceptor";

// request interceptor
const requestInterceptorBuilder = new InterceptorBuilder();
requestInterceptorBuilder.addFulfilled(attachToken);

const requestInterceptor = requestInterceptorBuilder.build();

// response interceptor
const responseInterceptorBuilder = new InterceptorBuilder();
responseInterceptorBuilder.addRejected(sessionExpired);

const responseInterceptor = responseInterceptorBuilder.build();

export default {
    requestInterceptor,
    responseInterceptor,
};

