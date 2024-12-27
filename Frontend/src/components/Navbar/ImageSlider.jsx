import React, { useState, useEffect } from 'react';
import { Box, Image, Button, Flex,Text } from '@chakra-ui/react';

const Img = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const schoolSlogans = [
    "Empowering Minds, Shaping Futures.",
    "Where Learning is a Journey, Not a Destination.",
    "Inspiring Excellence, Building Leaders.",
    "Knowledge is Power; Education is the Key.",
    "Creating Lifelong Learners, One Step at a Time."
  ];


  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto-slide every 1 second
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [images.length, isPaused]);

  return (
    <Flex overflow={'hidden'} flexDirection="column" position="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      {/* Display the current image */}
      <Image 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`} 
        overflow={'hidden'}
        objectFit="cover" 
        h={{base:"30vh",sm:"full"}}
      />
      

      <Flex w='100vw' justifyContent={'center'} position={'absolute'} top='50%'>
            <Text className='cssanimation leSnake sequence' fontSize={{base:"16px",lg:"24px"}} textDecoration={'underline'} textShadow={'2xl'} color={'white'} fontWeight={{base:"600",md:"800"}} borderRadius={'sm'} p='1'>{schoolSlogans[currentIndex]}</Text>
      </Flex>
      {/* Navigation Buttons */}

      <Flex 
        display={{ base: "none", md: "flex" }} 
        position="absolute" 
        top="50%" 
        w="100vw" 
        px="5%" 
        justifyContent="space-between" 
        transform="translateY(-50%)"
      >
        <Button fontFamily={'cursive'} px='25px' bg='white' fontWeight={600} color='blue.400'  onClick={handlePrevious}>
          Previous
        </Button>
        <Button fontFamily={'cursive'} px='25px' bg='white' fontWeight={600} color='blue.400' onClick={handleNext}>
          Next
        </Button>
      </Flex>
    </Flex>
  );
};

// Example usage
const images = [
  "https://patnacarmel.com/carmel-patna-img/carmel-slider03.jpg",
  "https://patnacarmel.com/carmel-patna-img/carmel-slider04.webp",
  "https://patnacarmel.com/carmel-patna-img/carmel-slider02.webp",
  "https://patnacarmel.com/carmel-patna-img/carmel-slider05.jpg",
  "https://patnacarmel.com/carmel-patna-img/carmel-slider06.jpg"
];

export default function ImageSlider() {
  return (
    <Box w="100vw" overflow={'hidden'}>
      <Img images={images} />
    </Box>
  );
}
