import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/login";


import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.js";
import Register from "./pages/register/Register";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user?<Home/>:<Register />}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={user?<Hotel/>:<Register />}/>
        <Route path="/login" element={<Login/>}/>
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
