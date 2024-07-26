export interface AppRoutes {
    root: string;
    home: string;
    ordersBoard: string;
    customerProcess: string;

    guest: string;
};

const appRoutes: AppRoutes = {
    root: '/',
    home: '/home',
    ordersBoard: '/orders-board',
    customerProcess: '/customer-process',
    guest: '/guest',
};

export default appRoutes;
