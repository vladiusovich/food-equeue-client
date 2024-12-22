import { ACCESS_TOKEN } from "../../../const/authConstans";

export const attachToken = (value: any) => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    console.debug('tokenRequestInterceptor', value);

    if (token) {
        value.headers['Authorization'] = `Bearer ${token}`;
    }

    return value;
};
