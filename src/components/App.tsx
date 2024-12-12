import useRouteResolver from "@hook/useRoteResolver";
import ClientLayout from "./layouts/ClientLayout";
import { observer } from "mobx-react-lite";

const App: React.FC = () => {
	useRouteResolver();

	return (
		<ClientLayout />
	);
}

export default observer(App);
