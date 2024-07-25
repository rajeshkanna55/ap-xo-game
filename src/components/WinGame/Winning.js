import { Box, Button, Card, Icon, Text } from "@chakra-ui/react";
import Board from "../components/GameBoard/Board";


const WinMessage = () => {
    return (
      <Box
        w={"100%"}
        display={"flex"}
        justifyContent={"center"}
        height={"100vh"}
      >
        <Card h={"80%"} w={"80%"} alignItems={"center"} bg={'lightgreen'} display={'flex'} justifyContent={'center'}>
           Player 1 wins
        </Card>
      </Box>
    );
}
export default WinMessage;