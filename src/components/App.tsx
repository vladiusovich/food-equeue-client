import React from "react";
import Layout from "./layouts/Layout";
import MainPage from "./pages/main/MainPage";

const App: React.FC = () => {
	return (
		<Layout>
			<MainPage />
		</Layout>
	);
}

export default App;
