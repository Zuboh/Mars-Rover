import { location, planet } from "../index.js";
import { foundObstacle } from "../obstacle.js";

let y;
let currentLocation;

export const goNorth = () => {
  y = location.y;
  y++;
  location.y = y;
  if (location.y < 0) {
    location.y = 0;
  }
  if (location.y > planet.length - 1) {
    location.y = 0;
  }
  currentLocation = planet[location.x][location.y];
  if (currentLocation != "X") {
    foundObstacle(currentLocation);
  }
  console.log("X:" + location.x + " Y:" + location.y);
};
