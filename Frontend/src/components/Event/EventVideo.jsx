import NavMain from "../Navbar/NavMain";
import { Flex, Box, Text, HStack, AspectRatio } from "@chakra-ui/react";
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
                        EV
                    </Box>
                    <Box
                        className="cssanimation lePeek sequence cssanimation effect3d"
                        color="black"
                    >
                        Event Video
                    </Box>
                </Flex>

                {/* Event List */}
                <Flex flexWrap={'wrap'} gap={{ base: '10', md: "2" }} align="start" justifyContent={'space-between'}>
                    {events.map((event, index) => (
                        <Flex
                            w={{ base: "100%", sm: "100%", md: "48%", lg: "32%", xl: '23%' }}
                           // h='390px'
                            key={index}
                            gap="4"
                            flexDirection={{ base: "column", md: "column" }}
                            boxShadow="md"
                            bg="#FFFBF3"
                            borderRadius="md"
                            mt='3'
                            _hover={{ color: "blue.400" }}
                        >
                            <Box flexShrink="0">
                                <AspectRatio ratio={16 / 9} borderRadius={'md'}>
                                    <iframe
                                        src={event.videoUrl}
                                        title={event.eventName}
                                        allowFullScreen
                                        style={{borderRadius:"10px"}}
                                        
                                    />
                                </AspectRatio>
                            </Box>
                            <Flex pt='0px' p='3'  justifyContent={'space-evenly'} flexDirection={'column'}>
                                <Text fontSize="lg" fontWeight="bold">
                                    {event.eventName}
                                </Text>
                                <HStack>
                                    <Text><CiCalendar /></Text>
                                    <Text fontSize="sm">
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

export default function EventVideo({ allnon }) {
    const events = [
        {
            eventName: "Cultural Day Celebration",
            eventDate: "2023-06-26",
            description: "A vibrant cultural event showcasing diverse traditions and performances.",
            videoUrl: "https://www.youtube.com/embed/A3M7-tKzhjs?si=G8YBMKfBwnpgQdos",
        },
        {
            eventName: "Annual Sports Meet",
            eventDate: "2023-01-15",
            description: "An exhilarating day filled with athletic competitions and team spirit.",
            videoUrl: "https://www.youtube.com/embed/A3M7-tKzhjs?si=G8YBMKfBwnpgQdos",
        },
        {
            eventName: "Art & Craft Workshop",
            eventDate: "2023-03-05",
            description: "An interactive workshop fostering creativity through art and craft activities.",
            videoUrl: "https://www.youtube.com/embed/WsqEbUsFpq8?si=zfR_oudJxLuG2dTJ",
        },
        {
            eventName: "Science Exhibition",
            eventDate: "2023-02-20",
            description: "A platform for students to showcase innovative science projects.",
            videoUrl: "https://www.youtube.com/embed/A3M7-tKzhjs?si=G8YBMKfBwnpgQdos",
        },
        {
            eventName: "Yoga and Wellness Camp",
            eventDate: "2022-12-10",
            description: "A rejuvenating camp focusing on yoga and mindfulness for mental well-being.",
            videoUrl: "https://www.youtube.com/embed/A3M7-tKzhjs?si=G8YBMKfBwnpgQdos",
        },
        {
            eventName: "Inter-School Debate Competition",
            eventDate: "2022-12-15",
            description: "A thought-provoking competition enhancing public speaking skills.",
            videoUrl: "https://www.youtube.com/embed/A3M7-tKzhjs?si=G8YBMKfBwnpgQdos",
        },
        {
            eventName: "Annual Day Celebration",
            eventDate: "2023-06-26",
            description: "A grand celebration marking the annual achievements of the school.",
            videoUrl: "https://www.youtube.com/embed/A3M7-tKzhjs?si=G8YBMKfBwnpgQdos",
        },
        {
            eventName: "Annual Day Celebration",
            eventDate: "2023-06-26",
            description: "A grand celebration marking the annual achievements of the school.",
            videoUrl: "https://www.youtube.com/embed/A3M7-tKzhjs?si=G8YBMKfBwnpgQdos",
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
