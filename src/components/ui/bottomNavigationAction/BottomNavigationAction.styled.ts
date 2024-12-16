import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import styled from 'styled-components';

const S = {
    bottomNavigationAction: styled(BottomNavigationAction)`
        border: 1px solid;

        .Mui-selected {
        }

        .MuiBottomNavigationAction-label {
            margin-top: 5px;
            font-size: 10px !important;
        }
    `,
};

export default S;