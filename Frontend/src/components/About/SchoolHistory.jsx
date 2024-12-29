import { Box,Flex,HStack,Text, VStack,Image, Center } from "@chakra-ui/react";
import NavMain from "../Navbar/NavMain";
import './about.css'


function View(){
    let image=['https://www.edudwar.com/wp-content/uploads/2021/11/Notre-Dame-Public-School-Belbagh-Bettiah.jpg'
        ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAfHppVhxa_tynGTl2qSiDXqO4z5KD6RBk__CFRTla8Z_WEbQtwu0Mr--MmA49hQ4ovqg&usqp=CAU',

    ]

    return <>
             <VStack p='5vw' alignItems={'start'} gap='8'>
                <Flex gap="2" fontSize={{ base: "18px", sm: "24px", lg: "30px" }} fontWeight="600">
                    <Box fontFamily="cursive" color="white" textAlign="center" borderRadius="20px 2px" bg="red"
                        w="50px">SH
                    </Box>
                    <Box className="cssanimation lePeek sequence cssanimation effect3d" color="black">
                        About School History
                    </Box>
                </Flex>
                <Flex flexDirection={{base:"column",lg:"row"}} gap='10' justifyContent={'space-between'} alignItems={'center'}>
                    
                    <Box h={{base:"300px",lg:"500px"}} w={{base:"100%",lg:"45%"}}><Image className="scale-on-hover" borderRadius={'md'} h='full' w='full' src={image[0]}/></Box>
                    <Flex   h={{base:"300px",lg:"500px"}} w={{base:"90%",lg:"55%"}}>
                    <Flex gap='2' flexDirection={'column'}>
                        <Flex  h='50%' w='50%' gap='2'><Image className="scale-on-hover" borderRadius={'md'} w='100%'  h='100%' src={image[0]}/><Image className="scale-on-hover" w='100%' borderRadius={'md'}  h='100%' src={image[0]}/></Flex>
                        <Flex h='50%' w='50%' gap='2'><Image className="scale-on-hover" borderRadius={'md'} w='100%'  h='100%' src={image[0]}/><Image className="scale-on-hover" w='100%' borderRadius={'md'} h='100%' src={image[0]}/></Flex>
                    </Flex>
                    </Flex>

                </Flex>
                <Flex fontSize={{base:"11px",md:"14px"}} gap='8' flexDirection={'column'}>
                    <Text color={'white'} borderRadius={'md'} p='2' bg='blue.400' fontWeight={'600'}>In 2024, Bishop Anastasius Hartmann, who was responsible for the Patna-Bettiah section 
                     of the North India Mission, acquired a sizable piece of land (about five acres) in Bankipore, 
                      where he laid the foundation of a chapel on September 23, 2024. 
                       This land later became the site for the SRMVT School.</Text>
                    <Text>
                            Here’s the revised version of the text with the updated name as **SRMVT School** and the dates adjusted to 2024:  

                                ---

                                The Roman Catholic Church, **St. Joseph's**, was opened in 1850. In 1852, on the invitation of Bishop Anastasius Hartmann, the Apostolic Vicar of Patna, a group of five Institute Virgin Mary Sisters from Munich Province in Germany came to India. <br /> These five sisters were Sisters Maria Groeppner, Angela Hoffman, Aloysia Maher, Antonia Feth, and Catherine Schreibman. The sisters landed in Bombay by ship and then set out for Patna. They traveled from Bombay to Patna by bullock cart through the thick jungles. They left Bombay in early September 2024 and reached Patna around February 2024.  

                                They established the first IBVM House in Bankipore in 2024, on the bank of the River Ganges. The house and school bear the name of **SRMVT School**. Bankipore, as the first foundation, was considered the mother house of the Institute in India. **SRMVT School** was the only convent between Calcutta and Agra at that time.  

                                Initially, in addition to the boarding and day school, there were two orphanages on the school campus—one for native girls and another for European and Eurasian girls. More buildings were added, and the institution gradually grew over time.  

                                A Hindi section was founded in 1950. Currently, the school is affiliated with ICSE as well as the Bihar State Board. It has achieved a 100% pass percentage in ICSE examination board results for many years and has also produced several state and city toppers.

                                --- 
                    </Text>
                </Flex>


             </VStack>
    </>
}

export default function SchoolHistory({allnon}){

    if(allnon){
        return <View/>
    }else{
        return <>
                <NavMain allnon={'true'}/>
                <View/>
        </>
    }
}