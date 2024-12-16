import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
    palette: {
        primary: {
            main: '#6200ea',
        },
        secondary: {
            main: '#03dac6',
        },
        background: {
            default: '#f5f5f5',
        },
        text: {
            primary: '#000',
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
});

export default muiTheme;