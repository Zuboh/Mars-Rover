import { elaborateCommans, commands } from "./commands.js";
import { goEast } from "./directions/goEast.js";
import { goNorth } from "./directions/goNorth.js";
import { goSouth } from "./directions/goSouth.js";
import { goWest } from "./directions/goWest.js";

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

export const moveRover = (direction) => {
  switch (direction) {
    case "N":
      goNorth();
      break;
    case "S":
      goSouth();
      break;
    case "E":
      goEast();
      break;
    case "W":
      goWest();
      break;
    default:
      console.log(
        "  N -> to go Nord \n  S -> to go Sud \n  E -> to go East \n  W -> to go West"
      );
      break;
  }
};

console.log(
  `Your Rover is operative and positioned at X:${location.x} Y:${location.y}`
);
elaborateCommans(commands);
