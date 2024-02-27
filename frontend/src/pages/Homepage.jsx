import { Box, Heading, Image } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import note from "../assests/note4.jpg"
export default function Homepage(){
    
    return <Box>
        <Navbar/>

        <Image w={500} position={"absolute"} src={note}/>
        <Heading mt={16} textAlign={"start"} size={"4x1"}>Note App</Heading>
        
        </Box>
}