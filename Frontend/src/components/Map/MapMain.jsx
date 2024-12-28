import { Box, Flex, AspectRatio, Center,Text } from "@chakra-ui/react";

export default function MapMain() {
    return (
        <>
            <Flex
                gap="8"
                flexDirection="column"
                boxShadow="xl"
                my="5"
                py="10"
                bg="#FFFBF3"
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
                        M
                    </Box>
                    <Box
                        className="cssanimation lePeek sequence cssanimation effect3d"
                        color="black"
                    >
                        Map & Location & Address
                    </Box>
                </Flex>

                {/* Map Section */}
                <Flex justifyContent="center" mt="5">
                    <AspectRatio ratio={16 / 9} w="100%">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8955.108517010207!2d84.47353895428563!3d26.712445543352725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39936cd8b7e34fe5%3A0xf18e68501b538967!2sKamal%20Sah%20High%20Schol%20%2C%20Nautan!5e0!3m2!1sen!2sin!4v1735377599674!5m2!1sen!2sin"
                            style={{
                                border: 0,
                                width: "100%",
                                height: "100%",
                            }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </AspectRatio>
                </Flex>
                <Flex  flexDirection={{base:"row",md:"row"}} gap='2' fontWeight={{base:"600",md:"800"}}>
                    <Text className="cssanimation lePeek sequence cssanimation effect3d">Santpur,Nautan Dubey ,</Text>
                    <Text className="cssanimation lePeek sequence cssanimation effect3d">Bettiah-845438</Text>
                </Flex>
            </Flex>
        </>
    );
}
