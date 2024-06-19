import typography from "@typography";
import UI from "@ui";
import React from "react";

const ClientInfo: React.FC = () => {
	return (
		<UI.Stack direction="column" gap={1} alignItems="center">
			<typography.h3>Your number</typography.h3>
			<typography.h4>{365}</typography.h4>
		</UI.Stack>
	);
}

export default ClientInfo;
