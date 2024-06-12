import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { SpinnerCircularFixed } from "spinners-react";

const Leaderboard = () => {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const APIURL = import.meta.env.VITE_DEPLOY_URL;
  console.log(APIURL);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${APIURL}/pokemon/Leaderboard/`);
      setEntries(response.data.sort((a, b) => b.score - a.score));
      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      console.error(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className=" flex justify-center mt-[30rem] bg-black items-center    ">
        <SpinnerCircularFixed
          size={71}
          thickness={99}
          speed={146}
          color="rgba(57, 172, 110, 1)"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-row flex-wrap items-center justify-center ">
        <Link to={"/"}>
          <button className="inline-block rounded-full my-3 text-xl font-bold bg-[#ddcb45] border-2 border-primary-100 pb-[6px] pt-2 px-40  uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-[#ddcb45] hover:bg-opacity-90 active:bg-[#ddcb45] focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 ">
            Back to the fight
          </button>
        </Link>
      </div>

      <div className=" flex justify-center min-h-[40rem]">
        <div className=" bg-[url('./src/assets/leaderboard.png')] w-[100%]  h-auto bg-no-repeat mt-28  relative"></div>

        <table className="min-w-[75%] bg-[#204301] bg-opacity-70  border-[0.1rem] border-[#bf1310] my-10 table-auto  absolute">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-2xl">
              <th className="text-center py-3">POKEMON</th>
              <th className="text-center py-3">NAME</th>
              <th className="text-center py-3 w-[20%] min-w-[150px]">SCORE</th>
              <th className="text-center py-3 w-[40%] min-w-[150px]">
                Last Updated
              </th>
            </tr>
          </thead>
          <tbody className="text-black text-center font-bold ">
            {entries.map((entry) => (
              <tr
                key={entry._id}
                className="border-b border-gray-200 py-3 hover:bg-[#204301] hover:bg-opacity-70"
              >
                <td className="flex flex-row place-content-center ">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${entry.pokemonID}.png`}
                    alt="pokemon sprite"
                    className="max-w-fit"
                  />
                </td>
                <td className="text-center text-2xl">{entry.name}</td>

                <td className="text-center text-2xl">{entry.score}</td>

                <td className="text-center text-2xl">
                  {entry.date
                    ? format(new Date(entry.date), "dd MMM yyyy, HH:mm")
                    : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className=" bg-[url('./src/assets/leaderboard2.png')] w-[100%] bg-right  h-auto bg-no-repeat mt-28  "></div>
      </div>
    </>
  );
};

export default Leaderboard;
