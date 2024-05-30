import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Mainpage = () => {
  return (

<div className="  relative "  >
    
    
    {/* navbar */}
    <div className=" flex  items-center justify-center flex-wrap mt-20  min-w-[50%]">
    <ul className="my-2 flex flex-row flex-wrap  bg-[#d7423b] px-[20%] rounded-xl ">
     <Link to={`/`} > <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-2xl"
      >
        <a href="#" className="flex items-center mr-6 hover:text-[#b5bcc7] transition-colors">
        Home
        </a>
      </Typography>
      </Link>
    <Link to={"/leaderboard"}>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-2xl"
      >
        <a href="#" className="flex items-center mr-6 hover:text-[#b5bcc7] transition-colors">
        Leaderboard
        </a>
      </Typography>
      </Link>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-2xl"
      >
        <a href="#" className="flex items-center hover:text-[#b5bcc7]  transition-colors">
        instruction
        </a>
      </Typography>
      
    </ul>
    </div>

      {/*main*/}
      <section className=" flex flex-row justify-evenly flex-wrap">
        <div className=" flex flex-col items-center mt-8">
         
          <Card />
          <button> <img
            src="./src/assets/pokeball.webp"
            className=" h-[20rem] w-[17rem] mt-9"
          /></button> 
        </div>
        <div className=" mt-60"> 
        {/* <button><img src="./src/assets/Schwert.webp" className=" h-[20rem] w-[17rem] mt-9" alt="Fight" /></button> */}

        <iframe width="110" height="200" src="https://www.myinstants.com/instant/whos-that-pokemon-90928/embed/" frameborder="0" scrolling="no"></iframe>
         </div>

        <div className="flex flex-col items-center mt-8">
      
          <Card />
          <button> <img
            src="./src/assets/pokeball.webp"
            className=" h-[20rem] w-[17rem] mt-9"
          /></button> 
        </div>
      </section>
    </div>
  );
};

export default Mainpage;
