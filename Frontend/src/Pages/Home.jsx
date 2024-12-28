import { Box,Flex,Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeMain from "../components/Home/HomeMain";
import MapMain from "../components/Map/MapMain";

export default function Home(){

    return <>
            <Navbar/>
            {/* --------------- */}
            <HomeMain/>
            {/* --------------- */}
            <MapMain/>
            {/* --------------- */}
            <Footer/>
    </>
}