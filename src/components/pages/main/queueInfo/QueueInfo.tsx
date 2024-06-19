import UI from "@ui";
import React from "react";
import QueueItem from "./QueueItem/QueueItem";

const data = {
	inProgress: 12,
	ready: 5,
};

const QueueInfo: React.FC = () => {
	return (
		<UI.Stack direction="column" gap={2}>
			<UI.Stack direction="row" gap={1} justifyContent="space-around">
				<UI.Stack direction="column" gap={1}>
					<QueueItem title="Count:" value={data.inProgress + data.ready} />
					<QueueItem title="In progress:" value={data.inProgress} />
				</UI.Stack>
				<UI.Stack direction="column" gap={1}>
					<QueueItem title="Ready:" value={data.ready} />
				</UI.Stack>
			</UI.Stack>

			<UI.Button variant="outlined" color="primary">
				Online board
			</UI.Button>
		</UI.Stack>
	);
}

export default QueueInfo;
