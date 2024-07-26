import { createHashRouter } from 'react-router-dom';
import MainPage from '../components/pages/main/MainPage';
import App from '../components/App';
import OrdersBoardPage from '../components/pages/orderBoard/OrdersBoardPage';
import OrderCheckWaiting from '../components/pages/orderCheckWaiting/OrderCheckWaiting';
import appRoutes from './routes';
import NotFoundPage from '@common/notFoundPage/NotFoundPage';
import GuestPage from '../components/pages/guest/GuestPage';
import GuestLayout from '../components/layouts/GuestLayout';
import VerifyOrderLayout from '../components/layouts/VerifyOrderLayout';


const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: appRoutes.root,
                element: <MainPage />,
            },
            {
                path: appRoutes.home,
                element: <MainPage />,
            },
            {
                path: appRoutes.ordersBoard,
                element: <OrdersBoardPage />,
            },
        ],
    },
    {
        path: appRoutes.customerProcess,
        element: <VerifyOrderLayout />,
        children: [
            {
                path: appRoutes.customerProcess,
                element: <OrderCheckWaiting />,
            },
        ],
    },
    {
        path: appRoutes.guest,
        element: <GuestLayout />,
        children: [
            {
                path: appRoutes.guest,
                element: <GuestPage />,
            }
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

export default router;