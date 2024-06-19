import typography from "@typography";
import UI from "@ui";
import React from "react";

const BranchInfo: React.FC = () => {
	return (
		<UI.Stack direction="column" gap={0.5} alignItems="center">
			<typography.bold>Chemi chachpuri</typography.bold>
			<typography.xsmall>Pipiupi street 14/3</typography.xsmall>
		</UI.Stack>
	);
}

export default BranchInfo;
