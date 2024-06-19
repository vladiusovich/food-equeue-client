import typography from "@typography";
import UI from "@ui";
import React from "react";

interface Props {
	title: string;
	value: number;
}

const QueueItem: React.FC<Props> = ({ title, value }) => {
	return (
		<UI.Stack direction="row" gap={1} alignItems="flex-end">
			<typography.bold>{title}</typography.bold>
			<typography.xsmall> {value} </typography.xsmall>
		</UI.Stack>
	);
}

export default QueueItem;
