import UI from "@ui";
import React, { useEffect } from "react";
import S from "./ClientInfo.styled";
import useAppStore from "@hook/useAppStore";
import { observer } from "mobx-react-lite";

const ClientInfo: React.FC = () => {
	const store = useAppStore();

	const orderId = store.user.orderId;

	useEffect(() => {
		store.user.fetch();
	}, [store]);

	if (store.user.getCustomerOrderRequestStore.loading) {
		// TODO: Add custom styles skeleton
		return (
			<UI.Skeleton variant="rectangular" width="100%" height="100px" />
		);
	};

	return (
		<UI.Paper>
			<UI.Stack direction="column" gap={2} alignItems="center">
				<UI.Typography variant="bold">Your number</UI.Typography>
				{orderId
					? (<UI.Typography variant="h3" color="success.high">{orderId}</UI.Typography>)
					: (<UI.Skeleton width="25%" />)
				}
			</UI.Stack>
		</UI.Paper>
	);
}

export default observer(ClientInfo);
