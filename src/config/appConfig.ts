const appConfig: ConfigType = {
    api: {
        apiUrl: process.env.REACT_APP_API_URL ?? '',
        socketUrl: process.env.REACT_APP_SOCKET_URL ?? '',
    }
};

console.debug("Init configuration:", appConfig);

export default appConfig;