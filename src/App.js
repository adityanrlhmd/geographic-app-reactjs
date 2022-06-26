import { useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Admin from "./pages/admin";
import Auth from "./pages/admin/auth";
import Create from "./pages/admin/create";
import Register from "./pages/admin/register";
import Edit from "./pages/admin/update";
import Home from "./pages/home";
import Map from "./pages/map";

function App() {
  // const [auth, setAuth] = useState(false);
  // const location = useLocation();
  // const token = localStorage.getItem("token");
  
  const ProtectedRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    // const { token } = useAuth();
  
    if (!user) {
      return <Navigate to="/auth" replace />;
    }
  
    return children;
  };
  return (
    <div className="App">
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Map/>} path="/map"/>
        
          <Route element={<Auth/>} path="/auth"/>
          <Route element={<Register/>} path="/register"/>
          <Route element={
          // <CheckAuthAdmin>
          <ProtectedRoute>
            <Admin/>
          </ProtectedRoute>
            // </CheckAuthAdmin>
            } path="/admin"/>
          <Route element={
            <ProtectedRoute>
              <Create/>
            </ProtectedRoute>
          } path="/admin/create"/>
          <Route element={
            <ProtectedRoute>
              <Edit/>
            </ProtectedRoute>
          } path="/admin/update/:id"/>
      </Routes>
    </div>
  );
}

export default App;
