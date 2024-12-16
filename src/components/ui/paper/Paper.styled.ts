import Paper from '@mui/material/Paper';
import styled from 'styled-components';

const S = {
    Paper: styled(Paper)`
        padding: 12px 16px;
        box-shadow: none !important;

        border: 1px solid;
        border-radius: ${({ theme }) => theme.borderRadius.regular} !important;
        border-color: ${({ theme }) => theme.colors.border.regular.high};
        background-color: ${({ theme }) => theme.colors.background.regular.high};
    `,
};

export default S;