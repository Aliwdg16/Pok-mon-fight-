import React from "react";
import Accordion from "./Accordion";
import { Link } from "react-router-dom";

const Instructions = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap items-center justify-center ">
        <Link to={"/"}>
          <button className="inline-block rounded-full mt-10 mb-10  text-xl font-bold bg-[#ddcb45] border-2 border-primary-100 pb-[6px] pt-2 px-40  uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-[#ddcb45] hover:bg-opacity-90 active:bg-[#ddcb45] focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 ">
            Back to the fight
          </button>
        </Link>
      </div>
      <div className="flex justify-center">
        <section className=" flex flex-col flex-wrap items-center bg-[#204301] bg-opacity-75 bg-origin-content bg-no-repeat bg-fixed bg-center border-8 border-[#ddcb45] rounded-3xl w-3/5 min-h-[55rem] max-h-full text-white">
          <div className="p-5 flex flex-row justify-around static">
            <div className="flex flex-col static mt-10">
              <Accordion title="Game Logic & Mechanics" className="">
                <ol className="list-decimal">
                  <li>The aim of the game is to simulate Pokemon battles</li>
                  <li>
                    To determine the winner the summ of Attack, Sp. Attack,
                    Defense and Sp. Defense is compared between the two fighters
                  </li>
                  <li>The winner stays on the battlefied.</li>
                  <li>
                    The loser gets re-shuffled and a new contender takes its
                    place.
                  </li>
                  <li>Each win counts for 10 Points.</li>
                  <li>The score is being kept in an external database.</li>
                  <li>
                    The scores of the Pokemons who took part in battle up to now
                    can be viewed at the Leaderboard.
                  </li>
                  <li>To view all the available Pokemons enter the Pokedex.</li>
                </ol>
              </Accordion>
              <Accordion title="How to Play?">
                <ol className="list-decimal">
                  <li>
                    Once you open the App two randomly chosen Pokemon will be
                    available to fight.
                  </li>
                  <li>
                    Once you click on the sword icon between the two Pokemon
                    Cards the fight will ensue.
                  </li>
                  <li>You will be notified by a sound.</li>
                  <li>The pop-up message will inform you who won.</li>
                  <li>
                    Once you save the score the pop-up will close and a new
                    contender will replace the loser.
                  </li>
                </ol>
              </Accordion>

              <Accordion title="Do I want to Play?">
                <p className="uppercase font-bold underline">
                  Of course you do silly!
                </p>
              </Accordion>
              <Accordion title="Patch notes">
                <p className="">
                  11.06.2024: We added HP and Speed to the calculation. Values
                  are now weighted leading to a balanced game experience. Values
                  are weighted as follows HP: 1.0, Attack: 2.0, Defense: 1.5,
                  "Sp. Attack": 2.0, "Sp. Defense": 1.5, Speed: 1.2
                </p>
              </Accordion>
              <p className="mt-10 text-2xl text-right ">
                ...and remember, PETa does not approve of this message nor
                game... <br />
                but we don't give a flying Pikachu about it! Neither does he!
              </p>
            </div>
            <div className="flex items-center justify-end">
              <img
              
                src="./public/petaPikachu.png"
                alt=""
                className="h-auto w-[30rem] object-fit static"
              />
            </div>
          </div>
          <p className="text-4xl font-extrabold">Thanks for playing!</p>
          <p className="mt-5 mb-2 text-3xl">Ali, Michal & Tarek</p>
        </section>
      </div>
    </div>
  );
};

export default Instructions;
