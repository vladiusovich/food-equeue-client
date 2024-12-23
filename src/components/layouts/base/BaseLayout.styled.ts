/* eslint-disable max-len */
import styled from "styled-components";

const S = {
    container: styled.main`
        margin: 20px 15px;

        @media (min-width: 768px) {
            max-width: 600px;
            margin: 20px auto;
        }
    `,

    content: styled.div`
        display: flex;
        flex-direction: column;
        min-height: calc(100vh - 56px);
    `,
};

export default S;
