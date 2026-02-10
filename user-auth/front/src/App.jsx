import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import RegisterUser from "./pages/register";
import { Routes, Route } from "react-router-dom";

const App = () => {


  return (
   <Routes>
      <Route path="/" element={<RegisterUser/>} />
      <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    
  
  );
};

export default App;
