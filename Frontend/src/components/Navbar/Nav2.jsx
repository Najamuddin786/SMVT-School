import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, HStack, VStack,Text } from "@chakra-ui/react";
import { Button } from "@/components/ui/button"
import NavLink from "./NavLink";
import Drawer from "./Drawer";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu"

import { IoMdArrowDropdown } from "react-icons/io";

export default function Nav2() {
  const [hoveredMenuIndex, setHoveredMenuIndex] = useState(null);

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

  return (
    <Flex bg='white' alignItems="center" py="20px" px={{ base: "5vw" }} justifyContent="space-between">
      {/* ------- Logo ---- */}
      <HStack  fontSize="30px" fontWeight="600" color={'blue.400'}>
        SRMVT-School
      </HStack>

      {/* ----------- Menu ---------- */}
      {/* <Flex gap="2" fontSize="18px" fontWeight="400">
        {navigationMenu.map((e,i)=>{
          if(e.subMenu){

            return <MenuRoot>
            <MenuTrigger asChild >
               <HStack _hover={{color:"blue.500"}} gap='0px' mx='10px' cursor={'pointer'}>{e.title} <IoMdArrowDropdown/></HStack>
            </MenuTrigger>
            <MenuContent mt='20px' bg='white' color="black" boxShadow={'sm'}>
                <Flex flexDirection={'column'} py='10px'>
                     
                  {e.subMenu.map((e,i)=>{
                    return <Link to={e.link}><MenuItem bg='none' _hover={{background:"none"}} value="export"><Text  color={'black'} _hover={{color:"blue.500"}} cursor={'pointer'}>{e.title}</Text></MenuItem></Link>
                  })}
                </Flex>
            </MenuContent>
          </MenuRoot>

          }else{
            return <Link to={e.link}><Text _hover={{color:"blue.500"}}>{e.title}</Text></Link>
          }
        })}
      </Flex> */}
      <Box display={{base:"flex",lg:"none"}}>{<Drawer/>}</Box>
        
      
      <Box display={{base:"none",lg:"Flex"}}><NavLink /></Box>

    </Flex>
  );
}
