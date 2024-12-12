import styled from "styled-components";
import UI from "@ui";
import theme from "@styles/Theme";

const S = {
	paper: styled(UI.Paper)`
		background-color: ${() => theme.colors.background.success.highest} !important;
	`,
};

export default S;
