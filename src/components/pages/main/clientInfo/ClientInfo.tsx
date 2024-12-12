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

	return (
		<UI.Stack direction="column" gap={1} alignItems="center">
			<UI.Typography variant="h4">Your number</UI.Typography>
			{orderId
				? (<S.clientInfo>{orderId}</S.clientInfo>)
				: (<UI.Skeleton width="25%" />)
			}

		</UI.Stack>
	);
}

export default observer(ClientInfo);
