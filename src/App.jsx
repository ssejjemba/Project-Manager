import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./routes/Home/home-component";
import BoardFragment from "./routes/BoardFragment/board-frag-component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<BoardFragment />} />
      </Route>
    </Routes>
  );
};

export default App;
