export const goNorth = (location) => {
  let newLocation = {
    x: location.x,
    y: location.y++,
  };
  console.log("X:" + newLocation.x + " Y:" + newLocation.y);
  return newLocation;
};
