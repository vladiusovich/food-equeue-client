import useAppStore from "@hook/useAppStore";
import UI from "@ui";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";

const BranchInfo: React.FC = () => {
	const store = useAppStore();

	const info = store.branch.info;

	useEffect(() => {
		store.branch.fetch();
	}, [store]);

	if (store.branch.loading) {
		return (
			<UI.Skeleton variant="rectangular" width="100%" height="70px" />
		);
	};

	return (
		<UI.Paper>
			<UI.Stack direction="column" gap={0.5} alignItems="center">
				<UI.Typography variant="bold"> {info?.name} </UI.Typography>
				<UI.Typography variant="xsmall">{info?.address}</UI.Typography>
			</UI.Stack>
		</UI.Paper>
	);
}

export default observer(BranchInfo);
