import React from "react";
import useFetchData from "./FetchData";

const Card = () => {
  const { entries, isLoading } = useFetchData();
  // console.log(entries);
  // console.log(entries[219].type.length);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Type Icons start
  const typeIcons = entries[219].type.map((type) => {
    const lowercaseType = type.toLowerCase();
    return (
      <img
        key={lowercaseType}
        alt={`${lowercaseType} icon`}
        src={`/typeIcons/${lowercaseType}.png`}
        className="w-12 h-12"
      />
    );
  });
  // Type Icons end

  // Type Card Background Color
  // first the Color array
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

  // then the function:
  let backgroundColorClass;
  if (entries[219].type.length === 1) {
    backgroundColorClass =
      entries[219].type[0] in typeColors
        ? `bg-${typeColors[entries[219].type[0]]}`
        : "bg-black"; // fallback color if type is not found, makes the error very visible
  } else if (entries[219].type.length === 2) {
    const color1 =
      entries[219].type[0] in typeColors
        ? `from-${typeColors[entries[219].type[0]]}`
        : "bg-black"; // fallback color if type is not found, makes the error very visible
    const color2 =
      entries[219].type[1] in typeColors
        ? `to-${typeColors[entries[219].type[1]]}`
        : "bg-black"; // fallback color if type is not found, makes the error very visible
    backgroundColorClass = `bg-gradient-to-br ${color1} ${color2}`;
  }
  // Type Card Background Color End

  console.log(backgroundColorClass);

  return (
    <>
      {/* <div
        className={`max-w-sm rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-blue-300 to-yellow-700 border-8 border-yellow-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}
      > */}
      <div
        className={`max-w-sm rounded-lg overflow-hidden shadow-lg ${backgroundColorClass} border-8 border-yellow-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}
      >
        <div className="flex flex-row justify-between p-2 pb-0">
          <p
            className={`font-bold text-2xl p-4 indent-8 ${
              entries[219].type.includes("Dark") ? "text-white" : ""
            }`}
          >
            {entries[219].name.english}
          </p>
          <div className="flex flex-row items-center">
            <p className="text-red-500 font-bold text-xl p-2 content-center">
              {entries[219].base.HP} HP
            </p>
            {typeIcons}
          </div>
        </div>
        <div className="m-2 border-1  bg-white border-8 border-black rounded">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${entries[219].id}.png`}
            alt={entries[219].name.english}
          />
        </div>
        <div className="px-6 py-4 pt-4 pb-4 m-3 bg-gray-200 rounded-lg flex flex-row justify-between">
          <div>
            <p className="text-gray-700 text-base p-1">
              Attack: {entries[219].base.Attack}
            </p>
            <p className="text-gray-700 text-base p-1">
              Defense: {entries[219].base.Defense}
            </p>
          </div>
          <div>
            <p className="text-gray-700 text-base p-1">
              Sp. Attack: {entries[219].base["Sp. Attack"]}
            </p>
            <p className="text-gray-700 text-base p-1">
              Sp. Defense: {entries[219].base["Sp. Defense"]}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
