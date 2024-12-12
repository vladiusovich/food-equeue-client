import UI from "@ui";
import React from "react";

interface Props {
	title: string;
	value: number;
}

const QueueItem: React.FC<Props> = ({ title, value }) => {
	return (
		<UI.Stack direction="column" gap={1} >
			<UI.Typography variant="xxsmall">{title}</UI.Typography>
			<UI.Typography variant="bold">{value}</UI.Typography>
		</UI.Stack>
	);
}

export default QueueItem;
