import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Map from "./pages/map";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Map/>} path="/map"/>
      </Routes>
    </div>
  );
}

export default App;
