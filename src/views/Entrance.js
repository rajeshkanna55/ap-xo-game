import { Button, Card, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Entrance = () => {
  const [name, setName] = useState({
    player1: "",
    player2: "",
  });

  const navigate = useNavigate();

  const GotoGame = () => {
    if (name?.player1 !== "" && name?.player2 !== "") return false;
    navigate("/xo-game");
  };
  const HoldNames = (e) => {
    const { name, value } = e.target;
    setName((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="welcome_note">
      <Card height="10vh" width="100%" display="flex" justifyContent="center">
        <h1 style={{ textAlign: "center" }}>welcom the to xo game</h1>
      </Card>
      <Card height="60vh" width="100%" p={5} mt={5}>
        <div className="players_name">
          <FormControl m={3}>
            <FormLabel>Enter the player 1 name</FormLabel>
            <Input
              name="player1"
              w={{ sm: "100%", md: "40vw" }}
              variant="outline"
              placeholder="Player1"
              onChange={HoldNames}
            />
          </FormControl>
          <FormControl m={3}>
            <FormLabel>Enter the player 2 name</FormLabel>
            <Input
              onChange={HoldNames}
              name="player2"
              w={{ sm: "100%", md: "40vw" }}
              variant="outline"
              placeholder="Player2"
            />
          </FormControl>
        </div>
        <div className="button_play">
          <Button
            w={{ sm: "100%", md: "50%" }}
            colorScheme="teal"
            variant="solid"
            onClick={GotoGame}
          >
            Play
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default Entrance;
