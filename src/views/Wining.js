import { Box, Button, Card, Icon, Text } from "@chakra-ui/react";
import Board from "../components/GameBoard/Board";
import { useNavigate } from "react-router-dom";


const Wining= () => {
    const navigate = useNavigate();
    return (
      <Box
        w={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={'center'}
        height={"100vh"}
      >
        <Card boxShadow='inset 10px 10px 33px 0px gray, 14px 10px 11px 1px gray' h={"80%"} w={"80%"} alignItems={"center"} bg={'lightgreen'} display={'flex'} justifyContent={'center'}>
           <Text mb={'10px'} fontSize={'24px'} fontWeight={'bold'}>Player 1 wins</Text>
           <Button colorScheme="teal" variant="solid" onClick={() => { navigate('/xo-game')}}>
             play Again
           </Button>
        </Card>
      </Box>
    );
}
export default Wining;