export default function getRandomID(dataSize) {
  return Math.floor(Math.random() * dataSize);
}

//input attack, defense, sap, sdp => stats1 stats2
function fight(stats1, ID1, stats2, ID2) {
  const sum1 = stats1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const sum2 = stats2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  if (sum1 > sum2) {
    return ID1;
  } else if (sum1 < sum2) {
    return ID2;
  } else {
    return -1;
  }
}

// export default function getPokemonData(dataset) {
//   console.log(dataset);
//   const id = getRandomID(dataset.length);
//   const foundData = dataset.filter((data) => data.id == id);
//   if (foundData.length > 0) {
//     console.log(foundData);
//     return foundData;
//   } else {
//     console.log("No Data found");
//   }
// }
