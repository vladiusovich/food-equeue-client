import styled from "styled-components";
import UI from "@ui";

const S = {
	chip: styled(UI.Chip) <{ $isCurrent?: boolean }>`
		width: ${({ $isCurrent }) => $isCurrent ? "100%" : "32px"};
		height: 32px !important;
	`,
};

export default S;
