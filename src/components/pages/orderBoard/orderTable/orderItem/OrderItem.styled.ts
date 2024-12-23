import styled from "styled-components";
import UI from "@ui";

const S = {
    chip: styled(UI.Chip) <{ $isCurrent: boolean }>`
        background-color: ${({ $isCurrent, theme }) => $isCurrent ? `${theme.colors.background.success.main} !important` : ""};
    `,
};

export default S;
