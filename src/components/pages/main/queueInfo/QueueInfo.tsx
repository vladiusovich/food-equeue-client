import typography from "@typography";
import UI from "@ui";
import React from "react";

const QueueInfo: React.FC = () => {
	return (
		<UI.Stack direction="column" gap={1}>
			<typography.bold>Queue Info</typography.bold>
			<UI.Skeleton />
		</UI.Stack>
	);
}

export default QueueInfo;
