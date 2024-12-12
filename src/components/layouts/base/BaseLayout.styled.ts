/* eslint-disable max-len */
import styled from "styled-components";

const S = {
    container: styled.main`
        height: calc(100vh - 56px);
        box-sizing: border-box;
        padding: 20px 10px;

        @media (min-width: 768px) {
            max-width: 800px;
            padding: 20px auto;
        }
    `,

    content: styled.div`
        display: flex;
        flex-direction: column;
        height: 100%;
    `,
};

export default S;
