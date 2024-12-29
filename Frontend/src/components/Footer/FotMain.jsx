import { Box,Flex,Text, HStack,Image, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SmailContact from "./SmailContact";

export default function FotMain(){

    const navigationMenu = [
        { title: "Home", link: "/" },
        {
          title: "Admission",
          link: "/admission",
          subMenu: [
            { title: "Apply Online", link: "/admission/apply" },
            { title: "Eligibility", link: "/admission/eligibility" },
            { title: "Important Dates", link: "/admission/dates" },
           
          ],
        },
        { title: "About Us", link: "/about" },
        {
          title: "Facilities",
          link: "/facilities",
          subMenu: [
            { title: "Library", link: "/facilities/library" },
            { title: "Sports", link: "/facilities/sports" },
            { title: "Hostel", link: "/facilities/hostel" },
          ],
        },
        { title: "Map", link: "/map" },
        {
          title: "Event",
          link: "/event",
          subMenu: [
            { title: "Upcoming Events", link: "/event/upcoming" },
            { title: "Past Events", link: "/event/past" },
            { title: "Event Gallery", link: "/event/gallery" },
          ],
        },
        { title: "Contact Us", link: "/contact" },
        
      ];

    return <>
            <Flex flexDirection={'column'} bg='blue.400' >
                {/* -------------- 1st */}
                <Flex flexWrap={'wrap'} flexDirection={{base:"column",sm:"row"}} px='5vw' py='10' color={'white'} gap='5' justifyContent={'space-between'}>
                    <Flex gap='5' flexDirection={'column'}>
                        <Image borderRadius={'xl'} w='400px' bg='white' src='https://stdominicsavios.com/wp-content/uploads/2022/11/St.-DOMINIC-SAVIOS-HIGH-SCHOOL-1-2048x488.png'/>
                        <Text  _hover={{color:"black"}}>St. Dominic Savio’s High School, <br />
                        Patna is a Christian linguistic minority <br />
                        institution founded in 1982.</Text>
                    </Flex>

                {/* -------------- 2nd */}
                
                    <VStack gap='1' alignItems={'left'}>
                        <Text fontSize={'20px'} fontWeight={'700'}>Quick Links</Text>
                        {navigationMenu.map((e,i)=>{
                            return <Link key={i} to={e.link}><Text  _hover={{color:"black"}}>{e.title}</Text></Link>
                        })}
                    </VStack>
                    <VStack gap='1' alignItems={'left'}>
                        <SmailContact/>
                    </VStack>
                    <VStack gap='1' alignItems={'left'}>
                        <Text fontSize={'20px'} fontWeight={'700'}>Address</Text>
                        <Text  _hover={{color:"black"}}>
                        St. Dominic Savio’s High School, <br />
                         Shiksha Kendra, Nasirganj, Digha, <br /> Patna-800012
                        </Text>
                    </VStack>

                
                </Flex>
                {/* -------------- 3nd */}

                <HStack color='white' bg='blue.600' px='5vw' w='100vw' justifyContent={'space-between'}>
                        <Text  _hover={{color:"black"}}>© All rights reserved</Text>
                        <Link><Text  _hover={{color:"black"}} fontWeight={'700'}>NivaSoft</Text></Link>
                </HStack>
            </Flex>
    </>
}