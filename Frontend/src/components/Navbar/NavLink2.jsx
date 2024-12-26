import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box,Separator, Flex, Text } from "@chakra-ui/react";

import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";

export default function NavLink2({ gapin }) {
  const navigationMenu = [
    { title: "Home", link: "/home" },
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
    <Flex
      gap={gapin ? gapin : "2"}
      fontSize="18px"
      fontWeight="400"
      flexDirection={{ base: "column"}}
      color={'blue.400'}
    >
      {navigationMenu.map((item, index) => {
        if (item.subMenu) {
          return (
            <AccordionRoot key={item.link} collapsible>
              <AccordionItem value={item.link}>
                <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
                <AccordionItemContent>
                  {item.subMenu.map((subItem) => (
                    <Link key={subItem.link} to={subItem.link}>
                      <Text
                        mx="10px"
                        bg='blue.400'
                        px='4'
                        py='2'
                        borderRadius={'sm'}
                        color={'white'}
                        _hover={{ color: "blue.500" }}
                        mt="3"
                        fontSize="16px"
                      >
                        {subItem.title}
                      </Text>
                    </Link>
                  ))}
                </AccordionItemContent>
              </AccordionItem>
            </AccordionRoot>
          );
        } else {
          return (
            <Link key={item.link} to={item.link}>
              <Text mb='5px' _hover={{ color: "blue.500" }}>
                {item.title}
              </Text>
              <Separator/>
            </Link>
          );
        }
      })}
    </Flex>
  );
}
