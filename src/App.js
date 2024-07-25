import logo from "./logo.svg";
import "./assets/css/App.css";
import { ChakraProvider, Switch } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Entrance from "./views/Entrance";
import PlayGame from "./views/PlayArea";
import Wining from "./views/Wining";
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Entrance />} />
            <Route path="/xo-game" element={<PlayGame />} />
            <Route path="/win" element={<Wining />} />
          </Routes>
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
