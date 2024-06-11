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
