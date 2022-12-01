import {Route} from "react-router-dom"
import {Routes} from "react-router-dom"
import { Login } from "../Pages/Login"
import { Register } from "../Pages/Register"

export const RoutesMain =()=>{
    return(
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="register" element={<Register/>}/>
            
        </Routes>
    )
}