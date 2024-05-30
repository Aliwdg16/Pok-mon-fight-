import { Route, Routes } from "react-router";
import Mainpage from "./component/Mainpage";
import Leaderboard from "./component/Leaderboard";

function App() {
  return (
    <>

    {/* <Leaderboard /> */}
      {/* <Mainpage /> */}
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/leaderboard" element={<Leaderboard/>}/>
      </Routes>
    </>
  )
}

export default App;
