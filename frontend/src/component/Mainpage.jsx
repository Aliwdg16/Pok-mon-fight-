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
import axios from "axios";
import { SpinnerCircularFixed } from 'spinners-react';

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
  const [createWinner, setCreateWinner] = useState(false);
  const [updateWinner, setUpdateWinner] = useState(false);
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

  // shuffle nach fight

  const fightShuffle = () => {
    if (winner > -1) {
      if (winner !== pokeID1) {
        shufflePokemon1();
      } else if (winner !== pokeID2) {
        shufflePokemon2();
      }
    }
  };

  useEffect(() => {
    if (winner !== -1) {
      toggleModal();
    }
  }, [winner]);

  function getPokeID1(pokeID) {
    setPokeID1(pokeID);
  }

  function getPokeID2(pokeID) {
    setPokeID2(pokeID);
  }

  useEffect(() => {
    setWinner(-1); // reset the winner state
  }, [count1, count2]);

  if (isLoading) {
    return <div className=" flex justify-center"><SpinnerCircularFixed size={71} thickness={99} speed={146} color="rgba(57, 172, 110, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" /></div>;
  }

  async function createWinnerEntry() {
    //create new entry for winner
    try {
      const response = await axios.post(
        "http://localhost:8000/pokemon/savewinner/",
        entries[winner]
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateWinnerEntry() {
    //update
    try {
      const response = await axios.put(
        `http://localhost:8000/pokemon/savewinner/${entries[winner].name.english}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  //onClick function for saving winner in MongoDB
  async function saveWinner() {
    console.log("save winner");
    console.log(winner);
    //Check if winner was created

    try {
      const isWinnerCreated = await axios.get(
        `http://localhost:8000/pokemon/Winner/${entries[winner].name.english}`
      );
      console.log(`isWinnerCreated: ${isWinnerCreated.data}`);
      console.log(isWinnerCreated);
      if (isWinnerCreated.data) {
        updateWinnerEntry();
      } else {
        createWinnerEntry();
      }
    } catch (error) {
      console.log(error);
    }

    closeModal();
  }

  function closeModal() {
    console.log("close Modal");
    fightShuffle();
    setWinner(-1);
    toggleModal();
  }

  return (
    <div>
      {/* navbar */}
      <div className=" flex  items-center justify-center flex-wrap my-5  min-w-[50%]">
        <ul className="my-2 flex flex-row flex-wrap  bg-[#ddcb45] px-[20%] rounded-xl py-2">
          <Link to={"/leaderboard"}>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 text-3xl font-bold hover:text-[#be120e] pr-8 pl-10"
            >
              <a href="#" className="flex items-center   transition-colors">
                Leaderboard
              </a>
            </Typography>
          </Link>
          <Link to={"/instructions"}>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 text-3xl font-bold hover:text-[#be120e] pr-10 pl-10"
            >
              <a href="#" className="flex items-center   transition-colors">
                Instruction
              </a>
            </Typography>
          </Link>
          <Link to={"/pokedex"}>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 text-3xl font-bold hover:text-[#be120e] pr-10 pl-8"
            >
              <a href="#" className="flex items-center   transition-colors">
                Pokedex
              </a>
            </Typography>
          </Link>
        </ul>
      </div>

      {/*main*/}
      <div className="flex justify-center">
        <section className=" flex justify-evenly flex-wrap bg-[#204301] bg-opacity-75 bg-origin-content bg-no-repeat bg-fixed bg-center border-8 border-[#ddcb45] rounded-3xl w-4/5">
          {/* <ModalWin
            showModal={showModal}
            winnerName={entries[winner].name.english}
            onSaveWinner={saveWinner}
            onCloseModal={closeModal}
          />
        )} */}

          <div className=" flex flex-col items-center mt-8">
            <Card
              key={1}
              entries={entries}
              onGetPokemon={count1}
              onGetID={getPokeID1}
            />
            <img
              src="./src/assets/pokeball.webp"
              className=" h-[15rem] w-[12rem] mt-9 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              onClick={shufflePokemon1}
            />
          </div>

          <div className="mt-60">
            <button
              onClick={() => {
                startFight();
              }}
            >
              {entries[winner] && (
                <div className=" text-left text-xl font-bold">
                  <ModalWin
                    showModal={showModal}
                    winnerName={entries[winner].name.english}
                    onSaveWinner={saveWinner}
                    onCloseModal={closeModal}
                  />
                </div>
              )}
              <img
                src="./src/assets/combat1.png"
                className=" h-[23rem] w-auto mt-9"
              />
            </button>
            {/* <button onClick={saveWinner}>Speichern</button> */}
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
              className=" h-[15rem] w-[12rem] mt-9 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              onClick={shufflePokemon2}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Mainpage;
