import typography from "@typography";
import UI from "@ui";
import React from "react";

const ExecutionTimeInfo: React.FC = () => {
	return (
		<UI.Stack direction="column" gap={3} alignItems="center">
			<typography.small>Average waiting time</typography.small>
			<UI.Stack direction="row" gap={1} alignItems="center" >
				<UI.CircularProgress size="6rem" thickness={2.5} />
				<typography.bold>5 min</typography.bold>
			</UI.Stack>
		</UI.Stack>
	);
}

export default ExecutionTimeInfo;
