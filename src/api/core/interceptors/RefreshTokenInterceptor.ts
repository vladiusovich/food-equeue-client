import axios, { AxiosInstance } from "axios";
import appConfig from "../../../config/appConfig";

// TODO
class RefreshTokenInterceptor {
    private isRefreshing = false;
    private refreshSubscribers: any[] = [];

    constructor(private instance: AxiosInstance) {}

    public handle = async (error: any) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            if (!this.isRefreshing) {
                this.isRefreshing = true;

                try {
                    const refreshToken = localStorage.getItem('refresh_token'); // Get refresh token from storage

                    // Make a request to refresh the token
                    const response = await axios.post(`${appConfig.api.apiUrl}/customer/auth/refresh`, {
                        refresh_token: refreshToken,
                    });

                    const { access_token: newAccessToken } = response.data;

                    // Update tokens in localStorage
                    localStorage.setItem('access_token', newAccessToken);

                    this.isRefreshing = false;

                    // Retry original requests with new token
                    this.onRefreshed(newAccessToken);
                } catch (refreshError) {
                    this.isRefreshing = false;
                    this.refreshSubscribers = [];
                    // Handle token refresh failure (e.g., logout user)
                    localStorage.removeItem('access_token');
                    localStorage.removeItem('refresh_token');
                    return Promise.reject(refreshError);
                }
            }

            // Queue the request while the token is being refreshed
            return new Promise((resolve) => {
                this.addRefreshSubscriber((newAccessToken: any) => {
                    originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    originalRequest._retry = true;
                    resolve(this.instance(originalRequest));
                });
            });
        }

        return Promise.reject(error);
    }

    private onRefreshed = (newAccessToken: any) => {
        this.refreshSubscribers.map((callback) => callback(newAccessToken));
    };

    public addRefreshSubscriber = (callback: (newAccessToken: any) => void) => {
        this.refreshSubscribers.push(callback);
    };
}

export default RefreshTokenInterceptor;