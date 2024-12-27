import { Box,Flex,Text } from "@chakra-ui/react";
import Nav1 from "./Nav1";
import Nav2 from "./Nav2";
import ImageSlider from "./ImageSlider";
import Nav3 from "./Nav3";

export default function NavMain(){

    return <>
            <Flex bg='white' zIndex={1100} flexDirection={'column'} position={'sticky'} top='0px'>
                <Nav1/>
                <Nav2/>
            </Flex>
            <ImageSlider/>
            <Nav3/>
    </>
}