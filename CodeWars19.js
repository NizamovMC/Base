function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }
  const pointSum = sum / classPoints.length;
  if (yourPoints > pointSum) {
    return true;
  } else {
    return false;
  }
}
