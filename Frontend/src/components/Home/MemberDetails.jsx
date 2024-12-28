import { useParams, useLocation } from "react-router-dom";
import { Box, VStack, Text, Image, HStack ,Flex} from "@chakra-ui/react";
import NavMain from "../Navbar/NavMain";

export default function MemberDetails() {
  const { value } = useParams(); // Get the dynamic parameter
  const location = useLocation(); // Access the state passed via Link
  const memberDetails = location.state?.user; // Safely access `user`

   // Preprocess the description to add <br/> after the target word or phrase
   const preprocessDescription = (text) => {
    const targetWord = "values"; // Replace with the word or phrase you want
    const regex = new RegExp(`(${targetWord})`, "gi");
    return text.replace(regex, `$1<br/><br/>`);
  };
  // Preprocessed description
  const formattedDescription = preprocessDescription(memberDetails.dis);

  if (!memberDetails) {
    return (
      <Box>
        <NavMain allnon="true" />
        <Text color="red.500" fontSize="lg" textAlign="center" mt="5">
          Member details not found. Please navigate from the team list.
        </Text>
      </Box>
    );
  }

  return (
    <>
      <NavMain allnon="true" />
      <Flex w='100vw' _hover={{background:"white"}} flexDirection={'column'} gap='8'  boxShadow={'xl'} my='5' py='10' bg='#FFFBF3' px={{base:"5vw",lg:"5vw"}}>
      <Flex flexDir={'row'}  gap='2' fontSize={{base:"18px",sm:"24px",lg:"30px"}} fontWeight={'600'}>
                    <Box fontFamily={'cursive'} color={'white'} textAlign={'center'}  borderRadius={'20px 2px'} bg='red' w='50px' >M</Box>
                    <Box color={'blue.400'}>Message From The {memberDetails.pos}</Box>
                </Flex>
            <Flex flexDirection={{base:"column",lg:"row"}}  gap={{base:"2",lg:"10"}} justifyContent={'space-between'}>
                
                <Box maxW={'360px'} minW={{base:"100%",sm:"350px"}} ><Image w='100%' borderRadius={'md'} src={memberDetails.img}/></Box>
                <Flex position={'relative'} borderRadius={'md'}  bg='blue.100' pb='25px'>
                    <Box p={{base:"1",md:"10"}} fontSize="md" textAlign="justify" dangerouslySetInnerHTML={{ __html: formattedDescription }} />
                    <Text fontWeight={'700'} color={'blue.400'} position={'absolute'} right='10px' bottom={'5px'}>{memberDetails.name}</Text>
                </Flex>
            </Flex>
            
        
      </Flex>
    </>
  );
}
