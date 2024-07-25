import { Box, Button, Card, Icon, Text } from "@chakra-ui/react";
import Board from "../components/GameBoard/Board";
import { useState } from "react";


const PlayGame = () => {
    const [player,setplayer ] = useState(false);
    return (
      <Box
        w={"100%"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"space-between"}
        height={"100vh"}
      >
        <Card h={"10%"} w={"100%"} alignItems={"center"}>
          <Box  w={"100%"} p={5} h={'100%'} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <Text fontSize={'30px'} fontWeight={'bold'}>player {!player ? '1' : '2'} move</Text>
            <Button w={"auto"} h={"50px"} colorScheme="teal" variant="solid" onClick={()=>{window.location.reload()}}>
              ReStart
            </Button>
          </Box>
        </Card>
        <Box w={"100%"} h={"70%"} display={"flex"} justifyContent={"center"}>
          <Box width={{ sm: "100%", md: "70%" }} h={'100%'}>
            <Board setplayer={setplayer} player={player}/>
          </Box>
        </Box>
      </Box>
    );
}
export default PlayGame;