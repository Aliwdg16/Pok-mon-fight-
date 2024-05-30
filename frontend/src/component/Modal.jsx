import React, { useState } from "react";
import "./Modal.css";

export default function Modal(startFight) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleClock = (toggleModal, startFight);

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        <img
          src="./src/assets/Schwert.webp"
          className=" h-[20rem] w-[17rem] mt-9"
        />
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <p>You lose!</p>
            <img src="./src/assets/lose.gif" alt="slapping pinguin" />
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
