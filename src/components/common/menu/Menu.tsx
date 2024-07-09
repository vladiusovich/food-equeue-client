import useAppStore from "@hook/useAppStore";
import UI from "@ui";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import appRoutes from "../../../router/routes";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import QueueIcon from '@mui/icons-material/Queue';

const items = [
	{
		label: 'My order',
		value: appRoutes.home,
		icon: <AccountCircleIcon />,
	},
	{
		label: 'Online Board',
		value: appRoutes.ordersBoard,
		icon: <QueueIcon />,
	},
];

// TODO: Implement Menu component
const Menu: React.FC = () => {
	const store = useAppStore();
	const [value, setValue] = useState(appRoutes.home);


	return (
		<UI.Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
			<UI.BottomNavigation
				value={value}
				onChange={(event, newValue) => {
					console.log('newValue', newValue);

					setValue(newValue);
				}}
			>
				{
					items.map((item, index) => (
						<UI.BottomNavigationAction
							key={item.value}
							label={item.label}
							value={item.value}
							icon={item.icon}
						/>
					))
				}
			</UI.BottomNavigation>
		</UI.Paper>
	);
}

export default observer(Menu);
