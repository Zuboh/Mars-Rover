import { initalLocation } from "./index.js";

const obstacles = {
  F: {
    obstacle: true,
    description: "Forest",
  },
  M: {
    obstacle: true,
    description: "Mountain",
  },
  O: {
    obstacle: true,
    description: "Lake",
  },
  X: {
    obstacle: false,
    description: "Land",
  },
};

let description;
let keys = Object.keys(obstacles);

export const foundObstacle = (currentLocation) => {
  for (keys in obstacles) {
    if (currentLocation == keys) {
      description = obstacles[keys].description;
    }
  }
  console.log("Obstacle: " + description);
  console.log(
    "Aborted the mission! reported the obstacle! \n The river star at new position: "
  );
  initalLocation();
};
