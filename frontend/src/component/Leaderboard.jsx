import { Link } from "react-router-dom";
import useFetchData from "./FetchData";









const Leaderboard = () => {


    const { entries, isLoading } = useFetchData();
    console.log(entries);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (

    <>
     <div className='flex flex-row flex-wrap items-center justify-center '> 

        <Link to={"/"}>
      <button className="inline-block rounded-full mt-40 px-40 py-10  bg-[#d7423b] border-2 border-primary-100 pb-[6px] pt-2 text-lg font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-[#cf382c] hover:bg-opacity-60 active:bg-[#cf382c] focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:text-primary-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
    Back to the fight
    </button> </Link>
    
     </div>

    
     <div className="border-[0.3rem] h-screen w-screen border-[#204301] mt-3 bg-[url('/src/assets/bg_red.jpg')] bg-origin-content bg-no-repeat bg-fixed bg-center bg-cover">
     <div className=" flex flex-row flex-wrap justify-around items-center mt-12 text-3xl text-[#204301] font-bold    ">
          
          {/*Name  */}
       
       <div className="flex flex-col flex-wrap items-center"> 
       <p className=" border-b-2 border-b-red-600  border-opacity-100">Name</p> 
        
        <ul className="w-96 bg-transparent  rounded-xl bg-[#204301] bg-opacity-75 ">
          <li className="w-full cursor-default  flex flex-col items-center border-b-2 border-neutral-100 border-opacity-100 py-4 text-black dark:border-opacity-50">
             {entries[149].name.english}
          </li>
          <li className="w-full border-neutral-100 flex flex-col items-center  border-b-2 border-opacity-100 py-4 text-black dark:border-opacity-50">
          {entries[149].name.english}
          </li>
          </ul>
          </div>

           {/* score */}
          <div className="flex flex-col flex-wrap items-center">
        <p className=" border-b-2 border-b-red-600 border-opacity-100 ">Score</p>
        <ul className="w-96 rounded-xl bg-[#204301] bg-opacity-75">
          <li className="w-full cursor-default border-b-2 border-neutral-100 flex flex-col items-center border-opacity-100 py-4 text-black dark:border-opacity-50">
              A disabled item
          </li>
          <li className="w-full border-b-2 border-neutral-100  flex flex-col items-center border-opacity-100 py-4 text-black dark:border-opacity-50">
              A second item
          </li>
          </ul>
          </div>

     </div>
    </div>
  
    </>


)
}

export default Leaderboard