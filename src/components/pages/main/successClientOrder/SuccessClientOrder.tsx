import UI from "@ui";
import React from "react";

const SuccessClientOrder: React.FC = () => {
	return (
		<UI.Stack direction="column" gap={1} alignItems="center">
			<UI.Typography variant="h4">Your order is ready</UI.Typography>
			<UI.Typography variant="small">Please pick up your order at the pick-up location</UI.Typography>
		</UI.Stack>
	);
}

export default SuccessClientOrder;
