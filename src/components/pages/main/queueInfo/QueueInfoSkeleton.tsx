import UI from "@ui";
import React from "react";

const QueueInfoSkeleton: React.FC = () => {
	return (
		<UI.Grid container spacing={1}>
			<UI.Grid xs={6}>
				<UI.Skeleton variant="rectangular" width="100%" height="100px" />
			</UI.Grid>
			<UI.Grid xs={6}>
				<UI.Skeleton variant="rectangular" width="100%" height="100px" />
			</UI.Grid>
			<UI.Grid xs={12}>
				<UI.Skeleton variant="rectangular" width="100%" height="100px" />
			</UI.Grid>
		</UI.Grid>
	);
}

export default QueueInfoSkeleton;
