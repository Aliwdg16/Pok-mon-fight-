import { Route, Routes } from "react-router";
import Mainpage from "./component/Mainpage";
import Leaderboard from "./component/Leaderboard";
import Pokedex from "./component/Pokedex";
import Instructions from "./component/Instructions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </>
  );
}

export default App;
