import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./routes/Home/home-component";
import BoardFragment from "./routes/BoardFragment/board-frag-component";
import { ThemeProvider } from "./contexts/theme-context";

const App = () => {
	return (
		<ThemeProvider>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route index element={<BoardFragment />} />
				</Route>
			</Routes>
		</ThemeProvider>
	);
};

export default App;
