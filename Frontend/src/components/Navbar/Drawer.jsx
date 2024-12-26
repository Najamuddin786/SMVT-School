import { Button } from "@/components/ui/button"
import { IoMenuOutline } from "react-icons/io5";
import { Image } from "@chakra-ui/react";
import { Box,Flex } from "@chakra-ui/react";
import NavLink from "./NavLink";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
export default function Drawer(){
  return (
    <DrawerRoot size='md'>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Box fontSize={'20px'}><IoMenuOutline /></Box>
      </DrawerTrigger>
      <DrawerContent >
        <DrawerHeader bg='gray.100'>
          <DrawerTitle>SMVT-School</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
            <Flex  justifyContent={'space-around'} alignItems='center' h='full' flexDirection={'column'} >
                {<NavLink gapin='6'/>}
                <Box bg='red' mx='-23px' border={'1px solid blue'}>
                    <Image src='https://www.yugmarg.com/images/news/full3343.jpg'/>
                </Box>
            </Flex>
        </DrawerBody>
        {/* <DrawerFooter>
          <DrawerActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerActionTrigger>
          <Button>Save</Button>
        </DrawerFooter> */}
        <DrawerCloseTrigger mt='10px' />
      </DrawerContent>
    </DrawerRoot>
  )
}
