import UI from '@ui';

const NotFoundPage = () => {

    return (
        <UI.Stack height='100vh' alignItems="center" justifyContent="center" gap={1}>
            <UI.Typography variant="bold">Page Not Found</UI.Typography>
            <UI.Typography variant="default">404</UI.Typography>
            <UI.Button variant="outlined" color="info" href="/">Back</UI.Button>
        </UI.Stack>
    );
};

export default NotFoundPage;
