import { Box,Flex,Text } from "@chakra-ui/react";
import NavMain from "../Navbar/NavMain";


function View(){

    return <>
                favnkk ..................
    </>
}

export default function Faculty({allnon}){

    if(allnon){
        return <View/>
    }else{
        return <>
                <NavMain allnon={'true'}/>
                <View/>
        </>
    }
}