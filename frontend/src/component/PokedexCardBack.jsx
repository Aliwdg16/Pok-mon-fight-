import React from "react";

const PokedexCardFront = ({ entry }) => {
  return (
    <>
      <div className="mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg bg-violet-300 border-8 border-yellow-400 mb-3 scale-125">
        <img src="./src/assets/cardBack.png" alt="" />
      </div>
    </>
  );
};

export default PokedexCardFront;

// {/* <div className="flex flex-row justify-between p-2">
// <p className="font-bold text-2xl p-3 text-pretty drop-shadow-[0_1.2px_1.2px_white]">
//   {entry.name.english}
// </p>
// <div className="flex flex-row items-center">
//   <p className="text-red-500 font-bold text-xl p-2 content-center">
//     {entry.base.HP}HP
//   </p>
//   {/* Type Icons Part */}
//   {entry.type ? (
//     entry.type.map((type, index) => {
//       const lowercaseType = type.toLowerCase();
//       return (
//         <img
//           key={`${entry.id}-${index}-${lowercaseType}`}
//           alt={`${lowercaseType} icon`}
//           src={`/typeIcons/${lowercaseType}.png`}
//           className="w-12 h-12"
//         />
//       );
//     })
//   ) : (
//     <p>Loading</p>
//   )}
//   {/* Type Icons End */}
// </div>
// </div>
// <div className="m-2 border-1  bg-white border-8 border-black rounded">
// <img
//   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${entry.id}.png`}
//   alt={entry.name.english}
// />
// </div>
// <div className="px-6 py-3  m-3 bg-gray-200 rounded-lg flex flex-row justify-between text-gray-700 p-1 text-l text-nowrap font-bold">
// <div>
//   <p className="">Attack: {entry.base.Attack}</p>
//   <p className="">Defense: {entry.base.Defense}</p>
// </div>
// <div>
//   <p className="">Sp. Attack: {entry.base["Sp. Attack"]}</p>
//   <p className="">Sp. Defense: {entry.base["Sp. Defense"]}</p>
// </div>
// </div> */}
