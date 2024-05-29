
import { Route, Routes } from "react-router"
import Mainpage from "./component/Mainpage"
import Card from "./component/Card";


function App() {
  return (

<>

       <Mainpage />
       {/* <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes> */}
      <Card />
    </>
  );

}

export default App;
