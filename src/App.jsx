import { useEffect } from "react";
import Web from "./routers/Web";
import { themeChange } from "theme-change";

function App() {
	useEffect(() => {
		themeChange(false);
	}, []);

	return <Web />;
}

export default App;
