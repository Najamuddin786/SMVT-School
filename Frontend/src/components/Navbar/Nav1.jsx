import { Box, Flex, Text } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaMobile } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { WiTime1 } from "react-icons/wi";

import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Nav1() {
  const contactDetails = [
    {
      icon: <FaMapMarkerAlt size={20} />,
      label: "Address",
      value: "Nautan,Nautan Dube, Bettiah 845438",
    },
    {
      icon: <FaMobile size={20} />,
      label: "Phone (Mobile)",
      value: "+91 8210942893",
    },
    {
      icon: <MdEmail size={20} />,
      label: "Email",
      value: "786mdnajamuddin@gmail.com",
    },
    {
      icon: <WiTime1 size={20} />,
      label: "Working Hours",
      value: "Mon-Sat 09:00 - 15:30",
    },
  ];
  const contact = [
    {
        icon: <FaMobile size={20} />,
        label: "Phone (Mobile)",
        value: "+91 8210942893",
      }
  ];

  return (
    <>
      <Flex
        justifyContent={"space-between"}
        // bg="blackAlpha.100"
        bg='blue.100'
        color={"blackAlpha.800"}
        px={{ base: "5vw" }}
        py="5px"
      >
        {/* Contact Details */}
        <Flex  alignItems={"center"} gap="2" flexWrap={'wrap'} display={{base:'none',lg:"Flex"}}>
          {contactDetails.map((e, i) => (
            <Flex  _hover={{color:"blue.400"}} key={i} alignItems="center" gap="2">
              <Box>{e.icon}</Box>
              <Text>{e.value}</Text>
            </Flex>
          ))}
        </Flex>
        <Flex _hover={{color:"blue.400"}} alignItems={"center"} gap="2" flexWrap={'wrap'} display={{base:'Flex',lg:"none"}}>
          {contact.map((e, i) => (
            <Flex key={i} alignItems="center" gap="2">
              <Box>{e.icon}</Box>
              <Text>{e.value}</Text>
            </Flex>
          ))}
        </Flex>

        {/* Social Media Links */}
        <Flex fontSize={"20px"} gap="2" alignItems={"center"}>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box _hover={{color:"green.400"}}>
              <FaYoutube />
            </Box>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box _hover={{color:"green.400"}}>
              <FaInstagram />
            </Box>
          </a>
          <a
                href="https://api.whatsapp.com/send/?phone=918210942893&text=Hello%20there!%20How%20can%20we%20help%20you?&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Box _hover={{ color: "green.400" }}>
                    <FaWhatsapp />
                </Box>
                </a>

        </Flex>
      </Flex>
    </>
  );
}
