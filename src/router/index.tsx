import { createHashRouter } from 'react-router-dom';
import MainPage from '../components/pages/main/MainPage';
import App from '../components/App';
import OrdersBoardPage from '../components/pages/orderBoard/OrdersBoardPage';
import OrderCheckWaiting from '../components/pages/orderCheckWaiting/OrderCheckWaiting';
import appRoutes from './routes';
import NotFoundPage from '@common/notFoundPage/NotFoundPage';


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
            {
                path: appRoutes.customerProcess,
                element: <OrderCheckWaiting />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

export default router;