import { Route, Routes } from "react-router";

import Card from "./component/Card";
import Mainpage from "./component/Mainpage";

function App() {
  return (
    <>
      <Mainpage />
      {/* <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes> */}
      <Card />
      <Mainpage />
    </>
  );
}

export default App;
