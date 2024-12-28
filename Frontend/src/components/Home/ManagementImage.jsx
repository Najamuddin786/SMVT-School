

import { Box,Flex,HStack,Text, VStack,Image } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";


export default function ManagementImage(){
    const teamMembers = [
        {
          img: "https://www.radiantpatna.com/images/team1.jpg",
          name: "Mr Vishal Singh",
          pos: "Patron",
          dis:`Radiant International School is one of the premier schools founded in 2003. 
           It is the labour of love of its founder, my husband, Late Shri. Ajit Singh,
            a philanthropist and visionary extraordinaire. His vision was to fuse international
            quality education with Indian values and to provide affordable, high-quality education to our citizens. The greatest tribute to him would be to take his vision forward towards realization. I deem it my mission in life to facilitate the realisation of his dream of creating generations of future leaders who would emerge from the portals of this school to sally forth into the world as individuals of character, as responsible citizens, and the torch bearers of tomorrow. 

Our founder Chairman, who put forth the values which form the edifice of our school, believed in simple living and high thinking. Blessed with innate leadership traits, an everlasting thirst for knowledge, and a keen aesthetic sense, he lived his life with a purpose, i.e., to work selflessly for the betterment of the community at large. Our school continues to aim to inculcate these essential values in our students. <br/>

I end this note with a hope and prayer to the Almighty to endow our students with mental alertness, physical strength, and moral uprightness and, moreover, to infuse them with simple living and high thinking.`
        },
        {
          img: "https://www.radiantpatna.com/images/team2.jpg",
          name: "Mrs. Meena Singh",
          pos: "Promotor",
          dis:`Having started Radiant International School in 2003, our education has consistently displayed full awareness of its social responsibilities through the various educational institutions set up in different parts of the country. It envisions education as a powerful instrument for the enlightenment and empowerment of our citizens. It is from this spirit that we draw our educational goal of empowering students to become self-reliant with a global outlook, albeit with a keen eye on local conditions.

Having made rapid strides in the very few years since the inception of the school, I can envision us rapidly moving along the path of growth carefully charted out by us. I see infrastructure developing further and coming up to truly global standards. Affiliated to the Central Board of Secondary Education, I see students of the school excelling in board examinations. With excellent sports and educational facilities, I also see our students' minds opening up; for the mind is like a parachute, it functions best when it is open. I see our students being groomed into mature and responsible citizens, intensely practical but still retaining the power to dream, to achieve their goals and to be successful in their endeavours.

Our goal is to make Indirapuram Public School the cradle of leadership and values, from the portals of which will emerge generations of future leaders in every sphere of activity in our country, as indeed in the world of tomorrow.

With this, I optimistically hope that together we, the management, along with the principal, teachers, administrative staff, our students, and their parents, will work hand-in-hand to realise the targets we have set out for ourselves.`
        },
        {
          img: "https://www.radiantpatna.com/images/team3.jpg",
          name: "Ms Rita Singh",
          pos: "Group Director",
          dis:`Having started the first Indirapuram Public School in 2003 at Indirapuram, the Group has consistently displayed full awareness of its social responsibilities through the establishment of various educational institutions in different parts of our country. It envisions education as a powerful instrument for the enlightenment and empowerment of our citizens. It is with this philanthropic spirit that we have drawn our educational goal of empowering our students to become self-dependent and have a global outlook, however with a keen eye to local conditions.

I see infrastructure in this, our newest offering, developing even further and coming up to truly global standards. Affiliated to the Central board of Secondary Education, I have observed students of our various schools excelling in board examinations in the last few years with immense satisfaction. With excellent sports and education facilities, I also see our students' minds opening up. The mind is like a parachute- it functions best when it is open. I see our students blossoming into mature and responsible citizens, intensely practical but retaining the childlike power to dream. To dream is to envision a goal. In order to achieve, there must be a goal.

Our goal is to make Indirapuram Public values School the cradle of leadership and values, from the portals of which will emerge generations of future leaders in every sphere of activity in our country, as indeed in the world of tomorrow.

With this, I optimistically hope that together we, the management, along with the principal, teachers, administrative staff, our students, and their parents, will work hand-in-hand to realise the targets we have set out for ourselves.`
        },
        {
          img: "https://www.radiantpatna.com/images/team4.jpg",
          name: "Ms Manisha Sinha",
          pos: "Principal",
          dis:`Having started the first Indirapuram Public School in 2003 at Indirapuram, the Group has consistently displayed full awareness of its social responsibilities through the establishment of various educational institutions in different parts of our country. It envisions education as a powerful instrument for the enlightenment and empowerment of our citizens. It is with this philanthropic spirit that we have drawn our educational goal of empowering our students to become self-dependent and have a global outlook, however with a keen eye to local conditions.

I see infrastructure in this, our newest offering, values developing even further and coming up to truly global standards. Affiliated to the Central board of Secondary Education, I have observed students of our various schools excelling in board examinations in the last few years with immense satisfaction. With excellent sports and education facilities, I also see our students' minds opening up. The mind is like a parachute- it functions best when it is open. I see our students blossoming into mature and responsible citizens, intensely practical but retaining the childlike power to dream. To dream is to envision a goal. In order to achieve, there must be a goal.

Our goal is to make Indirapuram Public School the cradle of leadership and values, from the portals of which will emerge generations of future leaders in every sphere of activity in our country, as indeed in the world of tomorrow.

With this, I optimistically hope that together we, the management, along with the principal, teachers, administrative staff, our students, and their parents, will work hand-in-hand to realise the targets we have set out for ourselves.`
        }
        
    ];
      

    return <>
            <Flex  gap='8' flexDirection={'column'} boxShadow={'xl'} my='5' py='10' bg='#FFFBF3' px={{base:"5vw",lg:"5vw"}}>
                <Flex  gap='2' fontSize={{base:"18px",sm:"24px",lg:"30px"}} fontWeight={'600'}>
                    <Box fontFamily={'cursive'} color={'white'} textAlign={'center'}  borderRadius={'20px 2px'} bg='red' w='50px' >M</Box>
                    <Box className="cssanimation lePeek sequence cssanimation effect3d">Management & Leadership Team</Box>
                </Flex>

                <Flex  flexWrap={{base:'nowrap',sm:"wrap",lg:"nowrap"}} flexDirection={{base:"column",sm:"row"}} gap={{base:"10",md:"5"}} justifyContent={{base:"center",md:"space-between"}}>
                        {teamMembers.map((e,i)=>{
                            return <VStack pb='3' bg='white' key={i} borderRadius={'md'} boxShadow={'md'}>
                                    <Box w='100%'><Image w='100%' borderRadius={'md'} src={e.img}/></Box>
                                    <VStack>
                                        <Text className="cssanimation effect3d" fontSize={{base:"18px",sm:"20px",md:"22px"}} fontWeight={'700'}>{e.pos}</Text>
                                        <Text fontFamily={'cursive'}>{e.name}</Text>
                                        <Link state={{user:e}} to={`/home/${e.pos}`}>
                                        <HStack alignItems={'center'} color={'blue.400'}>
                                            <Text>Read More</Text>
                                            <Box  fontSize={'20px'} fontWeight={'900'}><BsArrowRight/></Box>
                                        </HStack>
                                        </Link>
                                    </VStack>
                            </VStack>
                        })}
                </Flex>
            </Flex>
    </>
}