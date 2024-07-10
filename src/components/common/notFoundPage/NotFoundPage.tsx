import typography from "@typography";
import UI from '@ui';
import React from 'react';

const NotFoundPage = () => {

    return (
        <UI.Stack height='100vh' alignItems="center" justifyContent="center" gap={1}>
            <typography.bold>Page Not Found</typography.bold>
            <typography.default>404</typography.default>
            <UI.Button variant="outlined" color="info" href="/">Back</UI.Button>
        </UI.Stack>
    );
};

export default NotFoundPage;
