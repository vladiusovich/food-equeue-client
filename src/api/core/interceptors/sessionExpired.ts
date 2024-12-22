import appRoutes from "../../../router/routes";
export const sessionExpired = (error: any) => {
    if (error?.response?.status === 401) {
        console.debug('sessionExpired', error);

        // TODO:
        window.location.href = appRoutes.root;

        return;
    }

    return error;
};
