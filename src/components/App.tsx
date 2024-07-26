import useRoteResolver from "@hook/useRoteResolver";
import ClientLayout from "./layouts/ClientLayout";

import { observer } from "mobx-react-lite";

const App: React.FC = () => {
	useRoteResolver();

	return (
		<ClientLayout />
	);
}

export default observer(App);
