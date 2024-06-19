import typography from "@typography";
import UI from "@ui";
import React from "react";
import S from "./ClientInfo.styled";

const ClientInfo: React.FC = () => {
	return (
		<UI.Stack direction="column" gap={1} alignItems="center">
			<typography.h4>Your number</typography.h4>
			<S.clientInfo>{365}</S.clientInfo>
		</UI.Stack>
	);
}

export default ClientInfo;
