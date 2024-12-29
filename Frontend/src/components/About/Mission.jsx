import { Box,Flex,HStack,Text, VStack,Image, Center } from "@chakra-ui/react";
import NavMain from "../Navbar/NavMain";
import './about.css'


function View(){
    let image=['https://www.heritagepublicschool.org.in/images/Vision1.jpg'
        ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrllotUsehSnGYVub95-bnrBVKLRjjt-WF1OIe6Xy1FsbZNL_W9CHuMd9Hq0pbHWYTSQk&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZ1I_iTF8TpMN37lknIK6MnTpJ6oIsRQj6LS7QGuDGb4t43vDYUIcTx7Qz77r2k2MC28&usqp=CAU',


    ]

    const schoolTopics = [
        {
          title: "Importance of Discipline",
          description: "How discipline shapes students' lives and leads to success.",
        },
        {
          title: "Time Management for Students",
          description: "Tips for balancing studies, extracurricular activities, and leisure time.",
        },
        {
          title: "Effective Study Techniques",
          description: "Proven methods to study smarter and retain more information.",
        },
        {
          title: "Role of Teachers in Shaping Lives",
          description: "How teachers inspire, guide, and mentor students for a brighter future.",
        },
        {
          title: "Teamwork in School Projects",
          description: "The importance of collaboration and sharing responsibilities among classmates.",
        },
        {
          title: "The Value of Extracurricular Activities",
          description: "How activities like sports, arts, and music contribute to overall development.",
        },
        {
          title: "Importance of Cleanliness in School",
          description: "Maintaining hygiene and cleanliness for a healthy learning environment.",
        },
        {
          title: "Digital Learning in Modern Education",
          description: "How technology is transforming education and the benefits of online learning.",
        },
        {
          title: "Respect for School Rules and Regulations",
          description: "Why following school rules is essential for a harmonious environment.",
        },
        {
          title: "Building Friendships in School",
          description: "The importance of friendships and how they enrich school life.",
        }
      ];
      

    return <>
             <VStack p='5vw' alignItems={'start'} gap='8'>
                <Flex gap="2" fontSize={{ base: "18px", sm: "24px", lg: "30px" }} fontWeight="600">
                    <Box fontFamily="cursive" color="white" textAlign="center" borderRadius="20px 2px" bg="red"
                        w="60px">OM
                    </Box>
                    <Box className="cssanimation lePeek sequence cssanimation effect3d" color="black">
                        About Our Mission
                    </Box>
                </Flex>
                <Flex flexDirection={{base:"column",lg:"row"}} gap='10' justifyContent={'space-between'} alignItems={'center'}>
                    
                    <Box h={{base:"300px",lg:"500px"}} w={{base:"100%",lg:"45%"}}><Image className="scale-on-hover" borderRadius={'md'} h='full' w='full' src={image[0]}/></Box>
                    <Flex   h={{base:"300px",lg:"500px"}} w={{base:"90%",lg:"55%"}}>
                    <Flex gap='2' flexDirection={'column'}>
                        <Flex  h='50%' w='50%' gap='2'><Image className="scale-on-hover" borderRadius={'md'} w='100%'  h='100%' src={image[1]}/><Image className="scale-on-hover" w='100%' borderRadius={'md'}  h='100%' src={image[1]}/></Flex>
                        <Flex h='50%' w='50%' gap='2'><Image className="scale-on-hover" borderRadius={'md'} w='100%'  h='100%' src={image[0]}/><Image className="scale-on-hover" w='100%' borderRadius={'md'} h='100%' src={image[0]}/></Flex>
                    </Flex>
                    </Flex>

                </Flex>
                <Flex fontSize={{base:"11px",md:"14px"}} gap='8' flexDirection={'column'}>
                    
                    <Text color={'white'} borderRadius={'md'} p='2' bg='blue.400' fontWeight={'600'}> 
                        <mark style={{background:"none",color:"red",fontWeight:"700",fontSize:"20px",marginRight:"10px"
                        
                    }}>Our Mission</mark>To provide the best education and foster skill development, empowering students to achieve their full potential and excel in a rapidly changing world.</Text>
                    <Text>
                    <Flex gap='3' flexDirection={'column'}>
                        {schoolTopics.map((e,i)=>{
                            return <Box>
                                <Text fontWeight={'700'}>{i+1}. {e.title}</Text>
                                <Text>{e.description}</Text>
                            </Box>
                        })}
                    </Flex>
                           
                    </Text>
                </Flex>


             </VStack>
    </>
}

export default function Mission({allnon}){

    if(allnon){
        return <View/>
    }else{
        return <>
                <NavMain allnon={'true'}/>
                <View/>
        </>
    }
}