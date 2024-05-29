import React, { useEffect } from "react";

const Card = ({ ...name }) => {
  useEffect(() => {
    console.log(name);
  }, []);
  return (
    <>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-violet-400 border-8 border-yellow-400">
        <div className="flex flex-row justify-between p-2 pb-0">
          <p className="font-bold text-2xl p-4 indent-10">{name}</p>
          <div>
            <img
              alt="Psychic icon SwSh.png"
              src="/typeIcons/psychic.png"
              className="w-16 h-16"
            />
            {/* ich habe Icons für jeden Typ hier gefunden, sogar schon als .png ohne Background. */}
          </div>
        </div>
        <div className="m-2 border-1  bg-white border-8 border-black rounded">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
            alt="Mewtwo"
          />
        </div>
        <div className="px-6 py-4 pt-4 pb-4 m-3 bg-gray-200 rounded-lg">
          <p className="text-gray-700 text-base p-1">Attack: 110</p>
          <p className="text-gray-700 text-base p-1">Defense: 90</p>
        </div>
      </div>
    </>
  );
};

export default Card;

// code for later:
// -type Icons:
// const pokemon/pokedex/wie auch immer wir die variable nennen = {fetched data with the .type section };

//   const typeIcons = pokemon.type.map((type) => {
//     return (
//       <img
//         key={type}
//         alt={`${type} icon`}
//         src={`/typeIcons/${type}.png`}
//         className="w-16 h-16"
//       />
//     );
//   });

//   return (
//     <div>
//       <h2>{pokemon.name}</h2>
//       <div className="flex flex-wrap">
//         {typeIcons}
//       </div>
//     </div>
//   );
