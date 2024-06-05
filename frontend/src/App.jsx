import { Route, Routes } from "react-router";
import Mainpage from "./component/Mainpage";
import Leaderboard from "./component/Leaderboard";
import Pokedex from "./component/Pokedex";

function App() {
  return (
    <>
      {/* <Leaderboard /> */}
      {/* <Mainpage /> */}
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </>
  );
}

export default App;
