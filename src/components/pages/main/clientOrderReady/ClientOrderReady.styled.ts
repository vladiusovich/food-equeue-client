import styled from "styled-components";
import UI from "@ui";

const S = {
	paper: styled(UI.Paper)`
		background-color: ${({ theme }) => theme.colors.background.success.highest} !important;
	`,
};

export default S;
