import { Box,Flex,HStack,Input,Text,Button, Textarea, VStack, Center,Image } from "@chakra-ui/react";
import { useState } from "react";
import emailjs from '@emailjs/browser';



function Send(){
    return <Flex borderRadius={'500px'}  w={{base:"100%",md:"48%",lg:"45%",xl:'33%'}} gap='8' bg='white'  flexDirection={'column'}>
    
            <Center><Button  w='100%'>Massage Sending Completed</Button></Center>
</Flex>
}

export default function ConMain(){

    let [data,setData]=useState({name:"",number:"",massage:""})
    let [send,setSend]=useState(false)

    function setDa(){
        if(data.name==false){
            alert('Please Enter Your Name')

        }else if(data.number==false){
            alert('Please Enter Your Number')

        }else if(data.massage==false){
            alert('Please Enter Your Massage')
        }
        if(data.name && data.number && data.massage){
            console.log(data)
            emailjs.init('1az4QfowAhgDDgLMV');

            emailjs.send('service_reo0aru', 'template_bgvbsfc', data)
                .then(() => {
                    setSend(true)
                })
                .catch((error) => {
                    console.error('Failed to send email:', error);
                });

        }

    }

    return <>
           <Flex gap='10' px={'5vw'} py='10' bg='blue.100' flexDirection={'column'}>
                <Flex  gap='2' fontSize={{base:"18px",sm:"24px",lg:"30px"}} fontWeight={'600'}>
                    <Box fontFamily={'cursive'} color={'white'} textAlign={'center'}  borderRadius={'20px 2px'} bg='red' w='50px' >CU</Box>
                    <Box className="cssanimation lePeek sequence cssanimation effect3d">Contact Us</Box>
                </Flex>
                <HStack  gap='10' flexDirection={{base:'column',md:"row"}} w='100%' justifyContent={'space-between'}>

                    {/* ----------------Contect Us */}

                   
                   {send ? <Send/> :''}
                   {send==false ?<Flex borderRadius={'md'} w={{base:"100%",md:"48%",lg:"45%",xl:'33%'}} gap='8' bg='white' px={{base:"3",sm:"10"}} py='20' flexDirection={'column'}>
                        <VStack alignItems={'left'} gap='0'>
                            <HStack fontWeight={'600'} alignItems={'center'}><Text>Name</Text><Text color={'red'}>*</Text></HStack>
                            <Input placeholder="Enter Your Name" required onChange={(e)=>{setData({...data,name:e.target.value})}}/>
                        </VStack>
                        <VStack alignItems={'left'} gap='0'>
                            <HStack fontWeight={'600'} alignItems={'center'}><Text>Number</Text><Text color={'red'}>*</Text></HStack>
                            <Input placeholder="Enter Your Number" required onChange={(e)=>{setData({...data,number:e.target.value})}}/>
                        </VStack>
                        <VStack alignItems={'left'} gap='0'>
                            <HStack fontWeight={'600'} alignItems={'center'}><Text>Massage</Text><Text color={'red'}>*</Text></HStack>
                            <Textarea placeholder="Enter Your Massage" required onChange={(e)=>{setData({...data,massage:e.target.value})}}/>
                        </VStack>
                       <Center><Button onClick={setDa} w='100%'>Submit</Button></Center>
                    </Flex> :""}
                    


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
                            <Center><Image boxShadow={'2xl'} borderRadius={'500px'} h='350px' w='350px' src='https://i.pinimg.com/originals/1d/90/a7/1d90a79861d29d072350c01901b2828f.jpg'/>
                            </Center>
                        </Box>

                    </Flex>
                </HStack>
           </Flex>
    </>
}