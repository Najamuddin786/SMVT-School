import Home from "../Pages/Home"
import { Route,Routes } from "react-router-dom"
import MemberDetails from "./Home/MemberDetails"

export default function AllRoutes(){

    return <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/home/:value" element={<MemberDetails />} />
            </Routes>
    </>
}