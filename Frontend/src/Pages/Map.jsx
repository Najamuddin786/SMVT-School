import { Box, Flex, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MapMain from "../components/Map/MapMain";
import { useRef, useEffect } from "react";
import NavMain from "../components/Navbar/NavMain";

export default function Map() {
    const mapMainRef = useRef(null);

    useEffect(() => {
        if (mapMainRef.current) {
            // Scroll the MapMain into view
            mapMainRef.current.scrollIntoView({ behavior: "smooth" });
            // Apply an additional 70px offset
           // window.scrollBy({ top: '-50px', behavior: "smooth" });
        }
    }, []);

    return (
        <>
            <NavMain allnon="true" />
            {/* --------------- */}
            {/* <Box ref={mapMainRef}>
                //<Box h='60px' w='50px'></Box>
                <MapMain />
            </Box> */}
            <MapMain/>
            {/* --------------- */}
            <Footer />
        </>
    );
}
