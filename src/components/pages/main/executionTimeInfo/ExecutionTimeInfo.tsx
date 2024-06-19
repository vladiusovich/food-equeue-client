import typography from "@typography";
import UI from "@ui";
import React from "react";

const ExecutionTimeInfo: React.FC = () => {
	return (
		<UI.Stack direction="column" gap={1}>
			<typography.bold>ExecutionTimeInfo</typography.bold>
			<UI.Skeleton />
		</UI.Stack>
	);
}

export default ExecutionTimeInfo;
