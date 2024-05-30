// utils.js

export const getRandomID = (dataSize) => {
  return Math.floor(Math.random() * dataSize);
};

//input attack, defense, sap, sdp => stats1 stats2
export const fight = (stats1, ID1, stats2, ID2) => {
  if (!Array.isArray(stats1)) {
    throw new Error("stats1 must be an array");
  }

  if (!Array.isArray(stats2)) {
    throw new Error("stats2 must be an array");
  }

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
};
