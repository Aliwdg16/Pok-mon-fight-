import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import useFetchData from "./FetchData";
import { getRandomID, fight } from "../utils/utils.js";
import Modal from "./Modal";
import ModalWin from "./ModalWin.jsx";
import AudioPlayer from "./AudioPlay.jsx";
import AudioPlayer1 from "./AudioPlayer1.jsx";

const Mainpage = () => {
  const { entries, isLoading } = useFetchData();

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [fightCount, setFightCount] = useState(0);
  const [pokeID1, setPokeID1] = useState(-1);
  const [pokeID2, setPokeID2] = useState(-1);
  const [winner, setWinner] = useState(-1);

  //Funktionen triggern einen shuffle counter mit dem ein useEffect
  // in Card.jsx getriggert werden kann
  //Evtl. für maximale Shuffle nutzbar
  const shufflePokemon1 = () => {
    setCount1(count1 + 1);
  };

  const shufflePokemon2 = () => {
    setCount2(count2 + 1);
  };

  function startFight() {
    setFightCount(fightCount + 1);
    if (pokeID1 > -1 && pokeID2 > -1) {
      const stats1 = [
        entries[pokeID1].base.Attack,
        entries[pokeID1].base.Defense,
        entries[pokeID1].base["Sp. Attack"],
        entries[pokeID1].base["Sp. Defense"],
      ];
      const stats2 = [
        entries[pokeID2].base.Attack,
        entries[pokeID2].base.Defense,
        entries[pokeID2].base["Sp. Attack"],
        entries[pokeID2].base["Sp. Defense"],
      ];
      setWinner(fight(stats1, pokeID1, stats2, pokeID2));
    }
  }

  useEffect(() => {
    if (winner !== -1) {
      fightShuffle();
      setWinner(-1); // reset the winner state
    }
  }, [winner]);

  useEffect(() => {
    if (winner > -1) {
      console.log(`The Winner is ${entries[winner].name.english}`);
      setWinner(-1);
    }
  }, [winner]);

  function getPokeID1(pokeID) {
    console.log(`Id Pokemon 1 is ${pokeID}`);
    setPokeID1(pokeID);
  }

  function getPokeID2(pokeID) {
    console.log(`Id Pokemon 2 is ${pokeID}`);
    setPokeID2(pokeID);
  }

  useEffect(() => {
    console.log(
      `Pokemon1 was shuffled ${count1} times and Pokemon2 was shuffled ${count2} times`
    );
  }, [count1, count2]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // shuffle nach fight

  const fightShuffle = () => {
    if (winner > -1) {
      if (winner !== pokeID1) {
        console.log("Player loses");
        shufflePokemon1();
      } else if (winner !== pokeID2) {
        shufflePokemon2();
        console.log("Player wins");
      }
    }
  };

  return (
    <div>
      {/* navbar */}
      <div className=" flex  items-center justify-center flex-wrap mt-10 mb-10 min-w-[50%]">
        <ul className="my-2 flex flex-row flex-wrap  bg-[#ddcb45] px-[20%] rounded-xl">
          <Link to={`/`}>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-medium text-2xl font-bold hover:text-[#be120e]"
            >
              <a href="#" className="flex items-center mr-6  transition-colors">
                Home
              </a>
            </Typography>
          </Link>
          <Link to={"/leaderboard"}>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-medium text-2xl font-bold hover:text-[#be120e]"
            >
              <a href="#" className="flex items-center mr-6  transition-colors">
                Leaderboard
              </a>
            </Typography>
          </Link>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium text-2xl font-bold hover:text-[#be120e]"
          >
            <a href="#" className="flex items-center   transition-colors">
              Instruction
            </a>
          </Typography>
        </ul>
      </div>

      {/*main*/}
      <section className=" flex flex-row justify-evenly flex-wrap">
        <div className=" flex flex-col items-center mt-8">
          <Card
            key={1}
            entries={entries}
            onGetPokemon={count1}
            onGetID={getPokeID1}
          />
          <img
            src="./src/assets/pokeball.webp"
            className=" h-[20rem] w-[17rem] mt-9 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            onClick={shufflePokemon1}
          />
        </div>

        <div className="mt-60">
          <button
            onClick={() => {
              startFight();
              toggleModal();
            }}
          >
            <img
              src="./src/assets/Schwert.webp"
              className=" h-[20rem] w-[17rem] mt-9"
            />
          </button>
          {winner !== -1 &&
            (winner === pokeID1 ? <AudioPlayer1 /> : <AudioPlayer />)}
          {/* WORK IN PROGRESS ON WIN/LOSS MODAL */}
          {/* {winner !== -1 &&
            (winner === pokeID1 ? (
              <ModalWin showModal={showModal} toggleModal={toggleModal} />
            ) : (
              <Modal showModal={showModal} toggleModal={toggleModal} />
            ))} */}

          {/* <Modal showModal={showModal} toggleModal={toggleModal} />
          <ModalWin showModal={showModal} toggleModal={toggleModal} /> */}
        </div>

        <div className="flex flex-col items-center mt-8">
          <Card
            key={1}
            entries={entries}
            onGetPokemon={count2}
            onGetID={getPokeID2}
          />
          <img
            src="./src/assets/pokeball.webp"
            className=" h-[20rem] w-[17rem] mt-9 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            onClick={shufflePokemon2}
          />
        </div>
      </section>
    </div>
  );
};

export default Mainpage;
