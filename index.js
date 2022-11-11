import { elaborateCommands, commands } from "./commands.js";
import { foundObstacle } from "./obstacle.js";
import { goEast } from "./directions/East.js";
import { goSouth } from "./directions/South.js";
import { goWest } from "./directions/West.js";
import { goNorth } from "./directions/North.js";

export let location = {
  x: 0,
  y: 0,
};

let rover = {
  direction: "N",
  location: location,
};

export const planet = [
  ["X", "X", "X", "F"],
  ["X", "X", "X", "X"],
  ["X", "M", "M", "X"],
  ["X", "X", "X", "O"],
];

export const initalLocation = () => {
  location = {
    x: 0,
    y: 0,
  };
};

const cordinates = {
  N: (location) => goNorth(location),
  S: (location) => goSouth(location),
  W: (location) => goWest(location),
  E: (location) => goEast(location),
};

export const moveRover = (direction) => {
  cordinates[direction](location);
  if (location.y > planet.length - 1) {
    location.y = 0;
  }
  if (location.y > planet.length - 1) {
    location.y = 0;
  }
  let currentLocation = planet[location.x][location.y];
  if (currentLocation != "X") {
    foundObstacle(currentLocation);
  }
};

console.log(
  `Your Rover is operative and positioned at X:${location.x} Y:${location.y}`
);
elaborateCommands(commands);
