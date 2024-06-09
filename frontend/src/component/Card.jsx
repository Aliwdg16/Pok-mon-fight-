import React, { useEffect, useState } from "react";
import { getRandomID, fight } from "../utils/utils.js";
import { SpinnerCircularFixed } from 'spinners-react';

const Card = ({ entries, onGetPokemon, onGetID }) => {
  const [pokeID, setPokeID] = useState();

  useEffect(() => {
    setPokeID(getRandomID(entries.length));
  }, []);

  useEffect(() => {
    setPokeID(getRandomID(entries.length));
  }, [onGetPokemon]);

  useEffect(() => {
    onGetID(pokeID);
  }, [pokeID]);

  // Type Card Background Color
  // first the Color array
  const typeColorsBackground = {
    Normal: "bg-gray-400",
    Fire: "bg-orange-500",
    Water: "bg-blue-500",
    Grass: "bg-green-500",
    Electric: "bg-yellow-500",
    Ice: "bg-blue-300",
    Fighting: "bg-red-600",
    Poison: "bg-purple-500",
    Ground: "bg-yellow-700",
    Flying: "bg-indigo-300",
    Psychic: "bg-pink-500",
    Bug: "bg-green-700",
    Rock: "bg-yellow-800",
    Ghost: "bg-purple-800",
    Dragon: "bg-indigo-700",
    Dark: "bg-gray-700",
    Steel: "bg-gray-500",
    Fairy: "bg-pink-300",
  };

  const typeColors = {
    Normal: "gray-400",
    Fire: "orange-500",
    Water: "blue-500",
    Grass: "green-500",
    Electric: "yellow-500",
    Ice: "blue-300",
    Fighting: "red-600",
    Poison: "purple-500",
    Ground: "yellow-700",
    Flying: "indigo-300",
    Psychic: "pink-500",
    Bug: "green-700",
    Rock: "yellow-800",
    Ghost: "purple-800",
    Dragon: "indigo-700",
    Dark: "gray-700",
    Steel: "gray-500",
    Fairy: "pink-300",
  };

  function getBackgroundColor() {
    let backgroundColorClass = "";
    if (entries[pokeID]) {
      backgroundColorClass =
        entries[pokeID].type[0] in typeColorsBackground
          ? `${typeColorsBackground[entries[pokeID].type[0]]}`
          : "bg-black"; // fallback color if type is not found, makes the error very visible
    } else {
      backgroundColorClass = "bg-red-500";
    }

    // if (entries[pokeID]) {
    //   if (entries[pokeID].type.length === 1) {
    //     backgroundColorClass =
    //       entries[pokeID].type[0] in typeColorsBackground
    //         ? `${typeColorsBackground[entries[pokeID].type[0]]}`
    //         : "bg-black"; // fallback color if type is not found, makes the error very visible
    //   } else if (entries[pokeID].type.length === 2) {
    //     const color1 =
    //       entries[pokeID].type[0] in typeColors
    //         ? `from-${typeColors[entries[pokeID].type[0]]}`
    //         : "from-black"; // fallback color if type is not found, makes the error very visible
    //     const color2 =
    //       entries[pokeID].type[1] in typeColors
    //         ? `to-${typeColors[entries[pokeID].type[1]]}`
    //         : "to-black"; // fallback color if type is not found, makes the error very visible
    //     backgroundColorClass = `bg-gradient-to-r ${color1} ${color2}`;
    //   }
    // } else {
    //   backgroundColorClass = "bg-red-500";
    // }

    return backgroundColorClass;
  }

  // Type Icons start
  const typeIcons = entries[pokeID] ? (
    entries[pokeID].type.map((type) => {
      const lowercaseType = type.toLowerCase();
      return (
        <img
          key={lowercaseType}
          alt={`${lowercaseType} icon`}
          src={`/typeIcons/${lowercaseType}.png`}
          className="w-9 h-9"
        />
      );
    })
  ) : (
    <p>  <SpinnerCircularFixed size={71} thickness={99} speed={146} color="rgba(57, 172, 110, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" /></p>
  );
  // Type Icons end

  return entries && pokeID ? (
    <>
      <div
        className={
          pokeID &&
          ` container min-w-[12rem] max-w-[20rem]  min-h-[24rem] max-h-[30rem] rounded-lg overflow-hidden shadow-lg ${getBackgroundColor()} border-8 border-[#ddcb45] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300`
        }
      >
        <div className="flex flex-row justify-between p-2 pb-0">
          <p className="font-bold text-2xl p-3 text-pretty drop-shadow-[0_1.2px_1.2px_white]">
            {pokeID && entries[pokeID].name.english}
          </p>
          <div className="flex flex-row items-center">
            <p className="text-white font-bold text-xl p-2 content-center">
              {entries[pokeID].base.HP}HP
            </p>
            {typeIcons}
          </div>
        </div>
        <div className="m-2 mt-1 border-1  bg-white border-8 border-[#ddcb45] rounded">
          <img
            src={
              pokeID &&
              `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${entries[pokeID].id}.png`
            }
            alt={pokeID && entries[pokeID].name.english}
          />
        </div>
        <div className="px-6 py-3  m-3 bg-gray-200 rounded-lg flex flex-row justify-between text-gray-700 p-1 text-l font-bold">
          <div>
            <p className="">Attack: {pokeID && entries[pokeID].base.Attack}</p>
            <p className="">
              Defense: {pokeID && entries[pokeID].base.Defense}
            </p>
          </div>
          <div>
            <p className="">
              Sp. Attack: {pokeID && entries[pokeID].base["Sp. Attack"]}
            </p>
            <p className="">
              Sp. Defense: {pokeID && entries[pokeID].base["Sp. Defense"]}
            </p>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div><SpinnerCircularFixed size={71} thickness={99} speed={146} color="rgba(57, 172, 110, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" /></div>
  );
};

export default Card;
