import UI from "@ui";
import React from "react";

interface Props {
	title: string;
	value: number;
}

const QueueItem: React.FC<Props> = ({ title, value }) => {
	return (
		<UI.Stack direction="row" gap={1} alignItems="flex-end">
			<UI.Typography variant="bold">{title}</UI.Typography>
			<UI.Typography variant="xsmall">{value}</UI.Typography>
		</UI.Stack>
	);
}

export default QueueItem;
