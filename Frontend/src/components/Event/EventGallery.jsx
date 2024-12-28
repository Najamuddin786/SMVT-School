import NavMain from "../Navbar/NavMain";
import { Flex, Box, Text, HStack,Image } from "@chakra-ui/react";
import { CiCalendar } from "react-icons/ci";

function View({ events }) {
    return (
        <>
            <Flex
                gap="8"
                flexDirection="column"
                boxShadow="xl"
                my="5"
                py="10"
                bg="white"
                px={{ base: "5vw", lg: "5vw" }}
            >
                {/* Title Section */}
                <Flex
                    gap="2"
                    fontSize={{ base: "18px", sm: "24px", lg: "30px" }}
                    fontWeight="600"
                >
                    <Box
                        fontFamily="cursive"
                        color="white"
                        textAlign="center"
                        borderRadius="20px 2px"
                        bg="red"
                        w="50px"
                    >
                        EG
                    </Box>
                    <Box
                        className="cssanimation lePeek sequence cssanimation effect3d"
                        color="black"
                    >
                        Event Gallery
                    </Box>
                </Flex>

                {/* Event List */}
                <Flex flexWrap={'wrap'} gap={{base:'10',md:"2"}} align="start" justifyContent={'space-between'}>
                    {events.map((event, index) => (
                        <Flex
                            w={{base:"100%",sm:"100%",md:"48%",lg:"32%",xl:'23%'}}
                            h='440px'
                            key={index}
                            gap="4"
                            flexDirection={{ base: "column", md: "column" }}
                            boxShadow="md"
                            bg="#FFFBF3"
                            borderRadius="md"
                            mt='5'
                            
                            _hover={{color:"blue.400"}}
                           
                        >
                            <Box flexShrink="0">
                                <Image
                                    src={event.imageUrl}
                                    alt={event.eventName}
                                    w='full'
                                    borderRadius={'md'}
                                    h='270px'
                                />
                            </Box>
                            <Flex pt='0px' p='3' h='150px' justifyContent={'space-evenly'} flexDirection={'column'}>
                            <Text fontSize="lg" fontWeight="bold">
                                    {event.eventName}
                                </Text>
                                <HStack>
                                <Text><CiCalendar/></Text>
                                <Text fontSize="sm"  >
                                    {event.eventDate}
                                </Text>
                                
                                </HStack>
                                
                                <Text mt="2">{event.description}</Text>
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </>
    );
}

export default function EventUpcoming({ allnon }) {
    const events = [
        {
          eventName: "Cultural Day Celebration",
          eventDate: "2024-06-26",
          description: "A vibrant cultural event showcasing diverse traditions and performances.",
          imageUrl: "https://ppsngp.edu.in/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-26-at-10.38.58_732a4930-scaled.jpg",
        },
        {
          eventName: "Annual Sports Meet",
          eventDate: "2024-01-15",
          description: "An exhilarating day filled with athletic competitions and team spirit.",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKudYr8a0P9CgMdFxl-M5TKpgjZFjtpEk6XUw12Qz2EyUCqf9Lai9lE3kQo3leteJABI&usqp=CAU",
        },
        {
          eventName: "Art & Craft Workshop",
          eventDate: "2024-03-05",
          description: "An interactive workshop fostering creativity through art and craft activities.",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHy1wF6MmLocun34nR8Vzz3MDgRyDliQkHO9Dse3IVyk8tdqJMxqPhhVwNilSj0Rs_768&usqp=CAU",
        },
        {
          eventName: "Science Exhibition",
          eventDate: "2024-02-20",
          description: "A platform for students to showcase innovative science projects.",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ93N94-PJV78T44PXxbgTtFSGSO_hmUnAf24EKLmPf2LIhRm5bryjKNOMGSKfPYBx4rYg&usqp=CAU",
        },
        {
          eventName: "Yoga and Wellness Camp",
          eventDate: "2023-12-10",
          description: "A rejuvenating camp focusing on yoga and mindfulness for mental well-being.",
          imageUrl: "https://ppsngp.edu.in/wp-content/uploads/2023/12/activity07.jpg",
        },
        {
          eventName: "Inter-School Debate Competition",
          eventDate: "2023-12-15",
          description: "A thought-provoking competition enhancing public speaking skills.",
          imageUrl: "https://ppsngp.edu.in/wp-content/uploads/2023/12/activity05.jpg",
        },
        {
          eventName: "Annual Day Celebration",
          eventDate: "2024-06-26",
          description: "A grand celebration marking the annual achievements of the school.",
          imageUrl: "https://ppsngp.edu.in/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-26-at-10.38.56_7917dce3.jpg",
        },
      ];
      

    if (allnon) {
        return <View events={events} />;
    }
    return (
        <>
            <NavMain allnon="true" />
            <View events={events} />
        </>
    );
}
