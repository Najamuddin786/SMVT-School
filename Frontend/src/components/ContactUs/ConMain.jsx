import { Box,Flex,HStack,Input,Text,Button, Textarea, VStack, Center,Image } from "@chakra-ui/react";



export default function ConMain(){

    return <>
           <Flex gap='10' px={'5vw'} py='10' bg='blue.100' flexDirection={'column'}>
                <Flex  gap='2' fontSize={{base:"18px",sm:"24px",lg:"30px"}} fontWeight={'600'}>
                    <Box fontFamily={'cursive'} color={'white'} textAlign={'center'}  borderRadius={'20px 2px'} bg='red' w='50px' >CU</Box>
                    <Box className="cssanimation lePeek sequence cssanimation effect3d">Contact Us</Box>
                </Flex>
                <HStack gap='10' flexDirection={{base:'column',md:"row"}} w='100%' justifyContent={'space-between'}>

                    {/* ----------------Contect Us */}
                    <Flex borderRadius={'md'} w={{base:"100%",md:"48%",lg:"45%",xl:'33%'}} gap='8' bg='white' px={{base:"3",sm:"10"}} py='20' flexDirection={'column'}>
                        <VStack alignItems={'left'} gap='0'>
                            <HStack fontWeight={'600'} alignItems={'center'}><Text>Name</Text><Text color={'red'}>*</Text></HStack>
                            <Input placeholder="Enter Your Name"/>
                        </VStack>
                        <VStack alignItems={'left'} gap='0'>
                            <HStack fontWeight={'600'} alignItems={'center'}><Text>Number</Text><Text color={'red'}>*</Text></HStack>
                            <Input placeholder="Enter Your Number"/>
                        </VStack>
                        <VStack alignItems={'left'} gap='0'>
                            <HStack fontWeight={'600'} alignItems={'center'}><Text>Number</Text><Text color={'red'}>*</Text></HStack>
                            <Textarea placeholder="Enter Your Number"/>
                        </VStack>
                       <Center><Button w='100%'>Submit</Button></Center>
                    </Flex>


{/* ------------------Sidebar */}
                    <Flex flexDirection={{base:"column",md:"row"}} gap='10' alignItems={'start'}  borderRadius={'md'} w={{base:"100%",md:"48%",lg:"45%",xl:'60%'}} bg='white' px={{base:"3",sm:"10"}} py='20'>
                       <Flex gap='14' alignItems={'start'} flexDirection={'column'}>
                       <VStack fontSize={{base:"20px",md:'22px',lg:"24px"}} fontWeight={'700'}>
                            <Text>More Information</Text>
                            <Text ml='-5' color={'blue.400'}>SRMVT-School</Text>
                        </VStack>
                        <Flex gap='3' fontWeight={'500'} flexDirection={'column'}>
                            <Text>Affiliated to CBSE Khagual Road, Khagaul</Text>
                            <Text >PATNA (Bihar)- PIN: 801105</Text>
                            <Text color={'blue.400'}>SRMVT-School</Text>
                            <HStack>
                                <Text fontWeight={'700'}>Principal:</Text>
                                <Text> Ms. Manisha Sinha</Text>
                            </HStack>
                            <HStack>
                                <Text fontWeight={'700'}> Office: </Text>
                                <Text>9334488601|7281977779</Text>
                            </HStack>
                            <HStack>
                                <Text fontWeight={'700'}> Email: </Text>
                                <Text>786mdnajamuddin@gmail.com</Text>
                            </HStack>
                        </Flex>
                       </Flex>
                       <Box  h='350px' w='full'>
                            <Center><Image borderRadius={'500px'} h='350px' w='350px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTc2V1FngTfLoX526H97RWBP68sOQE7BJ6Q&s'/>
                            </Center>
                        </Box>

                    </Flex>
                </HStack>
           </Flex>
    </>
}