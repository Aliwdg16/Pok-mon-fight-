function getRandomID(dataSize) {
  return Math.floor(Math.random() * dataSize);
}

export default function getPokemonData(dataset) {
  console.log(dataset);
  const id = getRandomID(dataset.length);
  const foundData = dataset.filter((data) => data.id == id);
  if (foundData.length > 0) {
    console.log(foundData);
    return foundData;
  } else {
    console.log("No Data found");
  }
}
