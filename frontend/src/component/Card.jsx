import React from "react";
import useFetchData from "./FetchData";

const Card = () => {
  const { entries, isLoading } = useFetchData();
  console.log(entries);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-violet-400 border-8 border-yellow-400">
        <div className="flex flex-row justify-between p-2 pb-0">
          <p className="font-bold text-2xl p-4 indent-10">
            {entries[149].name.english}
          </p>
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
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${entries[149].id}.png`}
            alt={entries[149].name.english}
          />
        </div>
        <div className="px-6 py-4 pt-4 pb-4 m-3 bg-gray-200 rounded-lg flex flex-row justify-between">
          <div>
            <p className="text-gray-700 text-base p-1">
              Attack: {entries[0].base.Attack}
            </p>
            <p className="text-gray-700 text-base p-1">
              Defense: {entries[0].base.Defense}
            </p>
          </div>
          <div>
            <p className="text-gray-700 text-base p-1">
              Sp. Attack: {entries[0].base["Sp. Attack"]}
            </p>
            <p className="text-gray-700 text-base p-1">
              Sp. Defense: {entries[0].base["Sp. Defense"]}
            </p>
          </div>
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
