import React, { useState } from "react";
import ReactFlipCard from "reactjs-flip-card";
import PokedexCardFront from "./PokedexCardFront";
import PokedexCardBack from "./PokedexCardBack";

const Modal = ({ entry, onClose }) => {
  return (
    <div className="fixed flex w-full h-full bg-black bg-opacity-80">
      <div className="flex flex-col items-center justify-center absolute w-full h-full bg-gray-800 bg-opacity-80">
        <ReactFlipCard
          frontComponent={<PokedexCardFront entry={entry} />}
          backComponent={<PokedexCardBack entry={entry} />}
          containerStyle={{ width: "32em", height: "40em" }}
          direction={"diagonal"}
          flipTrigger={"onClick"}
        />

        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
