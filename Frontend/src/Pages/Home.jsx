import { Box,Flex,Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeMain from "../components/Home/HomeMain";

export default function Home(){

    return <>
            <Navbar/>
            {/* --------------- */}
            <HomeMain/>
            {/* --------------- */}
            <Footer/>
    </>
}