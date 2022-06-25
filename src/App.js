import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin";
import Auth from "./pages/admin/auth";
import Create from "./pages/admin/create";
import Edit from "./pages/admin/update";
import Home from "./pages/home";
import Map from "./pages/map";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Map/>} path="/map"/>
        <Route element={<Auth/>} path="/auth"/>
        <Route element={<Admin/>} path="/admin"/>
        <Route element={<Create/>} path="/admin/create"/>
        <Route element={<Edit/>} path="/admin/update"/>
      </Routes>
    </div>
  );
}

export default App;
