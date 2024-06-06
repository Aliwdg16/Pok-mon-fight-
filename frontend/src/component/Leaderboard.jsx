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
    const response= axios.get(`http://localhost:8000/pokemon/Leaderboard/`);
    setEntries(response.data);
  console.log(response.data);
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
      {/*
      <div className="border-[0.3rem] h-screen w-screen border-[#204301] mt-3 bg-[url('/src/assets/bg.jpg')] bg-origin-content bg-no-repeat bg-fixed bg-center bg-cover">
      <div className=" flex flex-row  items-center mt-12 text-3xl text-[#204301] font-bold  ml-0  ">
      //Name  

      <div className="flex flex-col flex-wrap items-center ">
      <div className="flex flex-row justify-around items-center mb-10 py-3"> <p className=" border-b-2 border-b-red-600  border-opacity-100">
              Name
              </p><p className=" border-b-2 border-b-red-600 border-opacity-100 ">
              Score
            </p><p className=" border-b-2 border-b-red-600 border-opacity-100 ">
             Last Updated
            </p>
            </div>


              <div className="bg-[#204301] bg-opacity-75 rounded-xl flex flex-row">
            <ul className="w-96 rounded-l-xl flex flex-row ">
              <li className="w-full cursor-default border-b-2 border-neutral-100 border-opacity-100 py-4 text-black dark:border-opacity-50">
                
                </li>
                
                </ul>
                </div>
                
                // score 
                <ul className="w-96 bg-[#204301] bg-opacity-75 flex flex-row">
                <li className="w-full cursor-default border-b-2 border-neutral-100  border-opacity-100 py-4 text-black dark:border-opacity-50">
                A disabled item
                </li>
                </ul>
                <ul className="w-96 rounded-r-xl bg-[#204301] bg-opacity-75 flex flex-row">
                <li className="  w-full cursor-default border-b-2 border-neutral-100 border-opacity-100 py-4 text-black dark:border-opacity-50">
                A disabled item
                </li>
                </ul>
                </div>
                
                </div>
              </div>*/}

      <div className="flex flex-row flex-wrap items-center justify-center ">
        <Link to={"/"}>
          <button className="inline-block rounded-full mt-10 mb-10  text-xl font-bold bg-[#ddcb45] border-2 border-primary-100 pb-[6px] pt-2 px-40  uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-[#ddcb45] hover:bg-opacity-90 active:bg-[#ddcb45] focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 ">
            Back to the fight
          </button>
        </Link>
      </div>
      <div className=" flex justify-center  border-[0.3rem] h-screen w-screen border-[#204301] mt-3 bg-[url('/src/assets/bg.jpg')] bg-origin-content bg-no-repeat bg-fixed bg-center bg-cover">
        {/* <img src="./src/assets/leaderboard.png" alt="leaderboard" className="w-[50%] h-[75%] mt-10 mb-10 relative" /> */}
        <div className=" bg-[url('./src/assets/leaderboard.png')] w-[50%] h-[75%] bg-no-repeat absolute mt-28  "></div>
        <table class="min-w-[75%] bg-[#204301] bg-opacity-70  border-[0.1rem] border-[#bf1310] my-10 relative">
          <thead>
            <tr class="bg-gray-200 text-gray-600 text-2xl">
              <th class="text-center py-3">NAME</th>
              <th class="text-center py-3">SCORE</th>
              <th class="text-center py-3">Last Updated</th>
            </tr>
          </thead>
          <tbody class="text-black text-center font-bold ">
            <tr key={entries._id} class="border-b border-gray-200 ">
              <td class="text-center">{entries.name.english}</td>
              <td class="text-center">{entries.score}</td>
              {/* <td class="text-center">{new Date(entries.lastUpdated).toLocaleDateString()}</td>  */}
             <td class="text-center">{entries.date}</td>
            </tr>
            {/* <tr class="border-b border-gray-200 ">
              <td class="text-center">Witchy Woman</td>
              <td class="text-center">The Eagles</td>
              <td class="text-center">1972</td>
            </tr>
            <tr class="border-b border-gray-200 ">
              <td class="text-center">Shining Star</td>
              <td class="text-center">Earth, Wind, and Fire</td>
              <td class="text-center">1975</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Leaderboard;
