import UI from "@ui";
import React from "react";

const QueueInfoSkeleton: React.FC = () => {
	return (
		<UI.Stack direction="column" gap={2}>
			<UI.Stack direction="row" gap={1} justifyContent="space-around">
				<UI.Stack direction="column" gap={1}>
					<UI.Skeleton width="50px"/>
					<UI.Skeleton width="50px"/>
				</UI.Stack>
				<UI.Stack direction="column" gap={1}>
					<UI.Skeleton width="50px"/>
				</UI.Stack>
			</UI.Stack>
			<UI.Skeleton height="50px"/>
		</UI.Stack>
	);
}

export default QueueInfoSkeleton;
