import typography from "@typography";
import UI from "@ui";
import React from "react";

const SuccessClientOrder: React.FC = () => {
	return (
		<UI.Stack direction="column" gap={1} alignItems="center">
			<typography.h4>Your order is ready</typography.h4>
			<typography.small>Please pick up your order at the pick-up location</typography.small>
		</UI.Stack>
	);
}

export default SuccessClientOrder;
