import { createHashRouter } from 'react-router-dom';
import MainPage from '../components/pages/main/MainPage';
import OrderBoardPage from '../components/pages/OrderBoard/OrderBoardPage';
import App from '../components/App';

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "home",
                element: <MainPage />,
            },
            {
                path: "order-board",
                element: <OrderBoardPage />,
            },
        ],
    },
]);

export default router;