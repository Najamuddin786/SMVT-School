import { Box,Flex,HStack,Text} from "@chakra-ui/react";
import { Status } from "@/components/ui/status"

import './Nav.css'



export default function Nav3(){

    return <>
        <Flex gap={{base:'1',md:"2"}} h='50px' alignItems={'center'} bg='blue.400' px={{base:'2vw',lg:"5vw"}}>
            <Box  color={'white'} fontWeight={{base:"600",md:"700"}} fontSize={'20px'} p={{base:"1",md:"3"}}>Notice</Box>
            <HStack >
                <Status value="error" />
                {/* <Status value="info" />
                <Status value="warning" />
                <Status value="success" /> */}
            </HStack>
           
            <Flex overflow={'hidden'} position={'relative'}  gap='2' px='10' alignItems={'center'} borderRadius={'100px'} h='90%' bg='white' w='full'>
                <Flex gap='2' alignItems={'center'} id='pot'  >
                <Text  boxShadow={'md'} color={'white'} px='20px' py='5px' bg='red' borderRadius={'50px'}>New</Text>
                <Text  w='430px' >{'Admission start class 1th to 10th & Admission fees free'}</Text>
                <Text  color={'white'} px='20px' py='5px' bg='green.500' borderRadius={'50px'}>Call</Text>
                <Text w='200px'>+91 8210942893</Text>
                </Flex>
            </Flex>
            
           

        </Flex>
    </>
}