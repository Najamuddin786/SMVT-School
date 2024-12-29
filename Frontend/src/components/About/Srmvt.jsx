import { Box,Flex,Text } from "@chakra-ui/react";
import NavMain from "../Navbar/NavMain";


function View(){

    return <>
                srvmt..................
    </>
}

export default function Srmvt({allnon}){

    if(allnon){
        return <View/>
    }else{
        return <>
                <NavMain allnon={'true'}/>
                <View/>
        </>
    }
}