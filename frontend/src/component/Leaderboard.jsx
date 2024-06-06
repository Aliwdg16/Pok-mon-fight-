import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


const Leaderboard = () => {
  
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  
  const fetchData=async()=> {
try {
    // const response= axios.get(`http://localhost:8000/pokemon/Winner/`);
    // const response= axios.get('http://localhost:8000/pokemon/savewinner/');
    const response= await axios.get(`http://localhost:8000/pokemon/Leaderboard/`);
    setEntries(response.data);
  console.log( response.data);
  setIsLoading(false);
}
catch (error) {
  setError(error.message);
  console.error(error);
  setIsLoading(false);
}
}
  useEffect(()=> {
fetchData();
  },[]);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-row flex-wrap items-center justify-center ">
        <Link to={"/"}>
          <button className="inline-block rounded-full mt-10 mb-10  text-xl font-bold bg-[#ddcb45] border-2 border-primary-100 pb-[6px] pt-2 px-40  uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-[#ddcb45] hover:bg-opacity-90 active:bg-[#ddcb45] focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 ">
            Back to the fight
          </button>
        </Link>
      </div>
      <div className=" flex justify-center  border-[0.3rem] min-h-[30rem] border-[#204301] mt-3 bg-[url('/src/assets/bg.jpg')] bg-origin-content bg-no-repeat bg-fixed bg-center bg-cover">
        {/* <img src="./src/assets/leaderboard.png" alt="leaderboard" className="w-[50%] h-[75%] mt-10 mb-10 relative" /> */}
        <div className=" bg-[url('./src/assets/leaderboard.png')] w-[100%]  h-screen bg-no-repeat absolute mt-28  "></div>
      
         <table class="min-w-[75%] bg-[#204301] bg-opacity-70  border-[0.1rem] border-[#bf1310] my-10 relative">
          <thead>
            <tr class="bg-gray-200 text-gray-600 text-2xl">
              <th class="text-center py-3">NAME</th>
              <th class="text-center py-3">SCORE</th>
              <th class="text-center py-3">Last Updated</th>
            </tr>
          </thead>
          <tbody class="text-black text-center font-bold ">
          {entries.map((entry) => (
            <tr key={entry._id} class="border-b border-gray-200 py-3">
              <td class="text-center">{entry.name}</td>
              <td class="text-center">{entry.score}</td>
               <td class="text-center">{entry.date}</td>
            </tr>
          ))}
          </tbody>
        </table> 
      </div>
    </>
  );
};

export default Leaderboard;
