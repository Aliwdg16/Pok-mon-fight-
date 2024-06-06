import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Leaderboard = () => {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/pokemon/Leaderboard/`
      );
      setEntries(response.data);
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
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-row flex-wrap items-center justify-center ">
        <Link to={"/"}>
          <button className="inline-block rounded-full mt-10 mb-10  text-xl font-bold bg-[#ddcb45] border-2 border-primary-100 pb-[6px] pt-2 px-40  uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-[#ddcb45] hover:bg-opacity-90 active:bg-[#ddcb45] focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 ">
            Back to the fight
          </button>
        </Link>
      </div>

      <div className=" flex justify-center border-[0.3rem] min-h-[40rem] border-[#204301] mt-3 bg-[url('/src/assets/bg.jpg')] bg-origin-content bg-no-repeat bg-fixed bg-center bg-cover ">
        <div className=" bg-[url('./src/assets/leaderboard.png')] w-[100%]  h-auto bg-no-repeat  mt-28"></div>

        <table className="min-w-[75%] bg-[#204301] bg-opacity-70  border-[0.1rem] border-[#bf1310] my-10 table-auto h-full">
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
                    src={`./src/assets/Sprites/${entry.pokemonID}.png`}
                    alt="pokemon sprite"
                    className="max-w-fit"
                  />
                </td>
                <td className="text-center text-2xl">{entry.name}</td>

                <td className="text-center text-2xl">{entry.score}</td>

                <td className="text-center text-2xl">{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className=" bg-[url('./src/assets/leaderboard2.png')] w-[100%]  h-auto bg-no-repeat mt-28"></div>
      </div>
    </>
  );
};

export default Leaderboard;
