import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetchData from "./FetchData";

const Pokedex = () => {
  const { entries, isLoading } = useFetchData();
  const [pageNo, setPageNo] = useState(1);
  const [showEntries, setShowEntries] = useState([]);
  const showNumber = 24;

  useEffect(() => {
    if (entries && entries.length > 0) {
      setShowEntries(entries.slice(0, showNumber));
    }
  }, [entries]);

  const handlePageChange = (newPageNo) => {
    const startIndex = (newPageNo - 1) * showNumber;
    const endIndex = newPageNo * showNumber;
    setShowEntries(entries.slice(startIndex, endIndex));
    setPageNo(newPageNo);
  };

  return (
    <>
      <div className="min-h-screen bg-[url('https://st2.depositphotos.com/4083027/10839/v/450/depositphotos_108396578-stock-illustration-geometric-abstract-pattern.jpg')] bg-cover bg-center bg-repeat-y flex flex-col items-center">
        <Link to={"/"} className="flex items-center">
          <button className="rounded-full m-5 px-40 py-10  bg-[#d7423b] border-2 border-primary-100 pb-[6px] pt-2 text-lg font-medium uppercase leading-normal text-primary-700 ">
            Back to the fight
          </button>
        </Link>

        {/* Card List start */}

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className=" mt-0 w-4/5 space-y-1 bg-sky-800/0 flex flex-row flex-wrap justify-center">
            {showEntries.map((entry, index) => (
              <li key={`${entry.id}-${index}`} className="m-3">
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-violet-300 border-8 border-yellow-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 mb-3">
                  <div className="flex flex-row justify-between p-2">
                    <p className="font-bold text-2xl p-4 indent-10 text-pretty">
                      {entry.name.english}
                    </p>
                    <div className="flex flex-row items-center">
                      <p className="text-red-500 font-bold text-xl p-2">
                        {entry.base.HP}HP
                      </p>
                      {/* Type Icons Part */}
                      {entry.type ? (
                        entry.type.map((type, index) => {
                          const lowercaseType = type.toLowerCase();
                          return (
                            <img
                              key={`${entry.id}-${index}-${lowercaseType}`}
                              alt={`${lowercaseType} icon`}
                              src={`/typeIcons/${lowercaseType}.png`}
                              className="w-12 h-12"
                            />
                          );
                        })
                      ) : (
                        <p>Loading</p>
                      )}
                      {/* Type Icons End */}
                    </div>
                  </div>
                  <div className="m-2 border-1  bg-white border-8 border-black rounded">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${entry.id}.png`}
                      alt={entry.name.english}
                    />
                  </div>
                  <div className="px-6 py-4 pt-4 pb-4 m-3 bg-gray-200 rounded-lg flex flex-row justify-between">
                    <div>
                      <p className="text-gray-700 text-base p-1">
                        Attack: {entry.base.Attack}
                      </p>
                      <p className="text-gray-700 text-base p-1">
                        Defense: {entry.base.Defense}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700 text-base p-1">
                        Sp. Attack: {entry.base["Sp. Attack"]}
                      </p>
                      <p className="text-gray-700 text-base p-1">
                        Sp. Defense: {entry.base["Sp. Defense"]}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Card End */}

        <div className=" flex justify-center m-2">
          {pageNo > 1 && (
            <button
              className="inline-block rounded-full border-2 border-black px-6 py-2 text-l font-medium uppercase leading-normal text-neutral-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 bg-white"
              onClick={() => handlePageChange(pageNo - 1)}
            >
              Back to {pageNo - 1}
            </button>
          )}
          <h4 className="inline-block rounded-full border-2 border-black px-6 py-2 text-l font-medium uppercase leading-normal text-neutral-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 bg-white">
            {pageNo}
          </h4>
          {pageNo * showNumber < entries.length && (
            <button
              className="inline-block rounded-full border-2 border-black px-6 py-2 text-l font-medium uppercase leading-normal text-neutral-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 bg-white"
              onClick={() => handlePageChange(pageNo + 1)}
            >
              Go to {pageNo + 1}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Pokedex;
