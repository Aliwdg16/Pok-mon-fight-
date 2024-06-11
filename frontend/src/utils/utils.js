// utils.js

export const getRandomID = (dataSize) => {
  return Math.floor(Math.random() * dataSize);
};

//input attack, defense, sap, sdp => stats1 stats2
export const fight = (pokemon1, ID1, pokemon2, ID2) => {
  const weights = {
    HP: 1.0,
    Attack: 2.0,
    Defense: 1.5,
    "Sp. Attack": 2.0,
    "Sp. Defense": 1.5,
    Speed: 1.2,
  };
  // if (!Array.isArray(pokemon1)) {
  //   throw new Error("stats1 must be an array");
  // }

  // if (!Array.isArray(pokemon2)) {
  //   throw new Error("stats2 must be an array");
  // }
  console.log(pokemon1);
  // Calculate the weighted power for each Pokémon
  // Calculate the weighted power for each Pokémon
  let pokemon1Power =
    pokemon1.HP * weights.HP +
    pokemon1.Attack * weights.Attack +
    pokemon1.Defense * weights.Defense +
    pokemon1.SpAttack * weights["Sp. Attack"] +
    pokemon1.SpDefense * weights["Sp. Defense"] +
    pokemon1.Speed * weights.Speed;

  let pokemon2Power =
    pokemon2.HP * weights.HP +
    pokemon2.Attack * weights.Attack +
    pokemon2.Defense * weights.Defense +
    pokemon2.SpAttack * weights["Sp. Attack"] +
    pokemon2.SpDefense * weights["Sp. Defense"] +
    pokemon2.Speed * weights.Speed;

  if (pokemon1Power > pokemon2Power) {
    console.log("Pokemon1 wins");
    return ID1;
  } else if (pokemon1Power < pokemon2Power) {
    console.log("Pokemon1 wins");
    return ID2;
  } else {
    return -1;
  }
};
