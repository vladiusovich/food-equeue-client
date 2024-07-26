/* eslint-disable max-len */
import styled from "styled-components";

const S = {
    container: styled.main`
        min-height: 100vh;
        box-sizing: border-box;
        margin: 20px 10px;

        @media (min-width: 768px) {
            max-width: 800px;
            margin: 20px auto;
        }
    `,
};

export default S;
