import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { DashBoard } from "../Pages/DashBoard";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { useNavigate } from "react-router-dom";

export const RoutesMain = () => {
  const navigate  = useNavigate()
  return (
    <Routes>

      <Route>
      <Route path="home" element={<DashBoard navigate={navigate}/>}>
        <Route path=":name" element={<DashBoard navigate={navigate}/>} />
      </Route>

      </Route>
      <Route path="/" element={<Login navigate={navigate} />} />
      <Route path="register" element={<Register navigate={navigate} />} />
    </Routes>
  );
};
