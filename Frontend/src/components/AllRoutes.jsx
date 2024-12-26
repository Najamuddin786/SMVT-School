import Home from "../Pages/Home"
import { Route,Routes } from "react-router-dom"

export default function AllRoutes(){

    return <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
    </>
}