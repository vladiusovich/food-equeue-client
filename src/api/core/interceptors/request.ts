import { ACCESS_TOKEN } from "../../../const/authConstans";

export const successRequestInterceptor = (config: any) => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
};
