import useAppStore from '@hook/useAppStore';
import { observer } from 'mobx-react-lite';
import ClientLayout from '../../components/layouts/ClientLayout';
import { Navigate } from 'react-router-dom';
import appRoutes from '../routes';

const PrivateRoute = () => {
    const appStore = useAppStore();
    console.debug("PrivateRoute", {
        isLoggedIn: appStore.user.auth.isLoggedIn,
        redirectTo: appStore.user.auth.isLoggedIn ? appRoutes.home : appRoutes.guest
    });

    return appStore.user.auth.isLoggedIn
        ? <ClientLayout />
        : <Navigate to={appRoutes.guest} />;
};

export default observer(PrivateRoute);