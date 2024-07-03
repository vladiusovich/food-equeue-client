import useAppStore from "@hook/useAppStore";
import typography from "@typography";
import UI from "@ui";
import { observer } from "mobx-react-lite";
import React from "react";

const BranchInfo: React.FC = () => {
	const store = useAppStore();

	const info = store.branch.info;

	if (store.branch.branchStore.loading) {
		return (
			<UI.Stack direction="column" gap={0.5} alignItems="center">
				<UI.Skeleton width="50%" />
				<UI.Skeleton width="80%" />
			</UI.Stack>
		);
	};

	return (
		<UI.Stack direction="column" gap={0.5} alignItems="center">
			<typography.bold> {info?.name} </typography.bold>
			<typography.xsmall>{info?.address}</typography.xsmall>
		</UI.Stack>
	);
}

export default observer(BranchInfo);
