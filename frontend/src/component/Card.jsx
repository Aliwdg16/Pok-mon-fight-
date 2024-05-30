import React, { useEffect, useState } from "react";
import { getRandomID, fight } from "../utils/utils.js";

const Card = ({ entries, onGetPokemon, onGetID }) => {
  // console.log(entries);
  const [pokeID, setPokeID] = useState();

  useEffect(() => {
    setPokeID(getRandomID(entries.length));
  }, []);

  useEffect(() => {
    setPokeID(getRandomID(entries.length));
  }, [onGetPokemon]);

  useEffect(() => {
    // console.log(pokeID);
    onGetID(pokeID);
  }, [pokeID]);

  // Type Icons start
  const typeIcons = entries[pokeID] ? (
    entries[pokeID].type.map((type) => {
      const lowercaseType = type.toLowerCase();
      return (
        <img
          key={lowercaseType}
          alt={`${lowercaseType} icon`}
          src={`/typeIcons/${lowercaseType}.png`}
          className="w-12 h-12"
        />
      );
    })
  ) : (
    <p>Loading</p>
  );
  // Type Icons end

  return entries && pokeID ? (
    <>
      {/* <div
        className={`max-w-sm rounded-lg overflow-hidden shadow-lg ${backgroundColorClass} border-8 border-yellow-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}
      > */}
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-violet-300 border-8 border-yellow-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="flex flex-row justify-between p-2 pb-0">
          <p className="font-bold text-2xl p-4 indent-10 text-pretty">
            {pokeID && entries[pokeID].name.english}
          </p>
          <div className="flex flex-row items-center">
            <p className="text-red-500 font-bold text-xl p-2 content-center">
              {entries[pokeID].base.HP}HP
            </p>
            {typeIcons}
          </div>
        </div>
        <div className="m-2 border-1  bg-white border-8 border-black rounded">
          <img
            src={
              pokeID &&
              `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${entries[pokeID].id}.png`
            }
            alt={pokeID && entries[pokeID].name.english}
          />
        </div>
        <div className="px-6 py-4 pt-4 pb-4 m-3 bg-gray-200 rounded-lg flex flex-row justify-between">
          <div>
            <p className="text-gray-700 text-base p-1">
              Attack: {pokeID && entries[pokeID].base.Attack}
            </p>
            <p className="text-gray-700 text-base p-1">
              Defense: {pokeID && entries[pokeID].base.Defense}
            </p>
          </div>
          <div>
            <p className="text-gray-700 text-base p-1">
              Sp. Attack: {pokeID && entries[pokeID].base["Sp. Attack"]}
            </p>
            <p className="text-gray-700 text-base p-1">
              Sp. Defense: {pokeID && entries[pokeID].base["Sp. Defense"]}
            </p>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default Card;

// WORK IN PROGRESS
// Type Card Background Color
// first the Color array
// const typeColors = {
//   Normal: "gray-400",
//   Fire: "orange-500",
//   Water: "blue-500",
//   Grass: "green-500",
//   Electric: "yellow-500",
//   Ice: "blue-300",
//   Fighting: "red-600",
//   Poison: "purple-500",
//   Ground: "yellow-700",
//   Flying: "indigo-300",
//   Psychic: "pink-500",
//   Bug: "green-700",
//   Rock: "yellow-800",
//   Ghost: "purple-800",
//   Dragon: "indigo-700",
//   Dark: "gray-700",
//   Steel: "gray-500",
//   Fairy: "pink-300",
// };
// then the function:
// let backgroundColorClass;
// if (entries[pokeID]) {
//   if (entries[pokeID].type.length === 1) {
//     backgroundColorClass =
//       entries[pokeID].type[0] in typeColors
//         ? `bg-${typeColors[entries[pokeID].type[0]]}`
//         : "bg-black"; // fallback color if type is not found, makes the error very visible
//   } else if (entries[pokeID].type.length === 2) {
//     const color1 =
//       entries[pokeID].type[0] in typeColors
//         ? `from-${typeColors[entries[pokeID].type[0]]}`
//         : "bg-black"; // fallback color if type is not found, makes the error very visible
//     const color2 =
//       entries[pokeID].type[1] in typeColors
//         ? `to-${typeColors[entries[pokeID].type[1]]}`
//         : "bg-black"; // fallback color if type is not found, makes the error very visible
//     backgroundColorClass = `bg-gradient-to-br ${color1} ${color2}`;
//   }
// } else {
//   backgroundColorClass = "bg-red-500";
// }
// Versuch mit 1 color:
// if (entries[pokeID]) {
//   backgroundColorClass =
//     entries[pokeID].type[0] in typeColors
//       ? `bg-${typeColors[entries[pokeID].type[0]]}`
//       : "bg-black"; // fallback color if type is not found, makes the error very visible
// } else {
//   backgroundColorClass = "bg-red-500";
// }
// console.log(backgroundColorClass);
// Type Card Background Color End
// WORK IN PROGRESS END
