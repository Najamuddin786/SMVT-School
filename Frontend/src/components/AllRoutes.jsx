import Home from "../Pages/Home"
import { Route,Routes } from "react-router-dom"
import MemberDetails from "./Home/MemberDetails"
import Map from "../Pages/Map"

import EventGallery from "./Event/EventGallery"
import EventPast from "./Event/EventPast"
import EventUpcoming from "./Event/EventUpcoming"

import ContactUs from "../Pages/ContactUs"
import Footer from "./Footer"
import EventVideo from "./Event/EventVideo"


export default function AllRoutes(){

    return <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/home/:value" element={<MemberDetails />} />
                <Route path="/map" element={<Map />} />
                <Route path="/event/gallery" element={<EventGallery />} />
                <Route path="/event/past" element={<EventPast />} />
                <Route path="/event/upcoming" element={<EventUpcoming />} />
                <Route path="/event/video" element={<EventVideo />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
            <Footer/>
    </>
}