import Login from "./pages/Login";
import RegisterUser from "./pages/register";
import { Routes, Route } from "react-router-dom";

const App = () => {


  return (
   <Routes>
      <Route path="/" element={<RegisterUser/>} />
      <Route path="/login" element={<Login />} />
    </Routes>
    
  
  );
};

export default App;
