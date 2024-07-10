import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import UI from "@ui";
import appRoutes from "../../../router/routes";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import QueueIcon from '@mui/icons-material/Queue';

interface NavigationItem {
	label: string;
	value: string;
	icon: React.ReactNode;
}

const navigationItems: NavigationItem[] = [
	{
		label: 'My Order',
		value: appRoutes.home,
		icon: <AccountCircleIcon />,
	},
	{
		label: 'Online Board',
		value: appRoutes.ordersBoard,
		icon: <QueueIcon />,
	},
];

const Menu: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [selectedValue, setSelectedValue] = useState<string>(location.pathname);

	useEffect(() => {
		setSelectedValue(location.pathname);
	}, [location.pathname]);

	const handleNavigate = (_event: React.ChangeEvent<{}>, value: string) => {
		setSelectedValue(value);
		navigate(value, { replace: true });
	};

	return (
		<UI.Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
			<UI.BottomNavigation value={selectedValue} onChange={handleNavigate}>
				{navigationItems.map((item) => (
					<UI.BottomNavigationAction
						key={item.value}
						label={item.label}
						value={item.value}
						icon={item.icon}
					/>
				))}
			</UI.BottomNavigation>
		</UI.Paper>
	);
}

export default observer(Menu);
