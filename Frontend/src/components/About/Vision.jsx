import { Box,Flex,Text } from "@chakra-ui/react";
import NavMain from "../Navbar/NavMain";


function View(){

    return <>
                vision ..................
    </>
}

export default function Vision({allnon}){

    if(allnon){
        return <View/>
    }else{
        return <>
                <NavMain allnon={'true'}/>
                <View/>
        </>
    }
}