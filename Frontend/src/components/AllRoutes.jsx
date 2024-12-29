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

// ---------------About -----Page
import Faculty from "./About/Faculty"
import Mission from "./About/Mission"
import SchoolHistory from "./About/SchoolHistory"
import Srmvt from "./About/Srmvt"
import Vision from "./About/Vision"


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

                {/* ------------------------- About */}
                <Route path="/about/faculty" element={<Faculty/>} />
                <Route path="/about/mission" element={<Mission/>} />
                <Route path="/about/history" element={<SchoolHistory/>} />
                <Route path="/about/srmvt" element={<Srmvt/>} />
                <Route path="/about/vision" element={<Vision/>} />
            </Routes>
            <Footer/>
    </>
}