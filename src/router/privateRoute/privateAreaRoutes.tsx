import MainPage from "../../components/pages/main/MainPage";
import OrdersBoardPage from "../../components/pages/orderBoard/OrdersBoardPage";
import appRoutes from "../routes";
import PrivateRoute from "./PrivateRoute";

const privateAreaRoutes = {
    element: <PrivateRoute />,
    children: [
        {
            path: appRoutes.home,
            element: <MainPage />,
        },
        {
            path: appRoutes.ordersBoard,
            element: <OrdersBoardPage />,
        },
    ],
};

export default privateAreaRoutes;