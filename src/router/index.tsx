import { createHashRouter } from 'react-router-dom';
import OrderCheckWaitingPage from '../components/pages/orderCheckWaiting/OrderCheckWaitingPage';
import appRoutes from './routes';
import NotFoundPage from '@common/notFoundPage/NotFoundPage';
import GuestPage from '../components/pages/guest/GuestPage';
import GuestLayout from '../components/layouts/GuestLayout';
import VerifyOrderLayout from '../components/layouts/VerifyOrderLayout';
import UiKit from '../components/pages/uikit/UiKit';
import RedirectHandler from './RedirectHandler';
import privateAreaRoutes from './privateRoute/privateAreaRoutes';

const router = createHashRouter([
    {
        path: appRoutes.root,
        index: true,
        element: <RedirectHandler />,
    },
    {
        path: appRoutes.root,
        ...privateAreaRoutes,
    },
    {
        path: appRoutes.customerProcess,
        element: <VerifyOrderLayout />,
        children: [
            {
                path: appRoutes.customerProcess,
                element: <OrderCheckWaitingPage />,
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
        // TODO: only in dev mode
        path: appRoutes.uikit,
        element: <UiKit />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

export default router;