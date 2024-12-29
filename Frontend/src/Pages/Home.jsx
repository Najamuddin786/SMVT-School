import { Box,Flex,Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeMain from "../components/Home/HomeMain";
import MapMain from "../components/Map/MapMain";
import EventGallery from "../components/Event/EventGallery";

export default function Home(){

    return <>
            <Navbar/>
            {/* --------------- */}
            <HomeMain/>
            {/* --------------- */}
            <MapMain/>
            {/* --------------- */}
            <EventGallery allnon='true'/>
            {/* --------------- */}
            {/* <Footer/> */}
    </>
}