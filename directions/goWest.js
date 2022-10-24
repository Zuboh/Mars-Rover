import { location, planet } from "../index.js";
import { foundObstacle } from "../obstacle.js";

let x;
let currentLocation;

export const goWest = () => {
  x = location.x;
  x--;
  location.x = x;
  if (location.x < 0) {
    location.x = planet.length - 1;
  }
  if (location.x > planet.length - 1) {
    location.y = 0;
  }
  currentLocation = planet[location.x][location.y];
  if (currentLocation != "X") {
    foundObstacle(currentLocation);
  }
  console.log("X:" + location.x + " Y:" + location.y);
};