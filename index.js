let location = {
  x: 0,
  y: 0,
};

let rover = {
  direction: "N",
  location: location,
};

let description;

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

const planet = [
  ["X", "X", "X", "F"],
  ["X", "X", "X", "X"],
  ["X", "M", "M", "X"],
  ["X", "X", "X", "O"],
];

const initalLocation = () => {
  location = {
    x: 0,
    y: 0,
  };
};

const commands = ["S", "W", "W", "S"];

const commandsRover = () => {
  for (let i = 0; i < 4; i++) {
    let command;
    console.log(`Give commands to the Rover:`);
    //insert from input
    commands.push(command);
  }
};

const elaborateCommans = (commands) => {
  for (let i = 0; i < commands.length; i++) {
    let command = commands[i];
    moveRover(command);
  }
};

let keys = Object.keys(obstacles);
const foundObstacle = (currentLocation) => {
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

let y;
let x;
let currentLocation;

const moveRover = (direction) => {
  switch (direction) {
    case "N":
      y = location.y;
      y++;
      location.y = y;
      if (location.y < 0) {
        location.y = 0;
      }
      if (location.y > 3) {
        location.y = 0;
      }
      currentLocation = planet[location.x][location.y];
      if (currentLocation != "X") {
        foundObstacle(currentLocation);
      }
      console.log("X:" + location.x + " Y:" + location.y);
      break;
    case "S":
      y = location.y;
      y--;
      location.y = y;
      if (location.y < 0) {
        location.y = planet.length - 1;
      }
      if (location.y > 3) {
        location.y = 0;
      }
      currentLocation = planet[location.x][location.y];
      if (currentLocation != "X") {
        foundObstacle(currentLocation);
      }
      console.log("X:" + location.x + " Y:" + location.y);
      break;
    case "E":
      x = location.x;
      x++;
      location.x = x;
      if (location.x < 0) {
        location.y = 0;
      }
      if (location.x > 3) {
        location.y = 0;
      }
      currentLocation = planet[location.x][location.y];
      if (currentLocation != "X") {
        foundObstacle(currentLocation);
      }
      console.log("X:" + location.x + " Y:" + location.y);
      break;
    case "W":
      x = location.x;
      x--;
      location.x = x;
      if (location.x < 0) {
        location.x = planet.length - 1;
      }
      if (location.x > 3) {
        location.y = 0;
      }
      currentLocation = planet[location.x][location.y];
      if (currentLocation != "X") {
        foundObstacle(currentLocation);
      }
      console.log("X:" + location.x + " Y:" + location.y);
      break;
    default:
      console.log(
        " type N -> to go Nord \n type S -> to go Sud \n type E -> to go East \n type W -> to go West"
      );
      break;
  }
};
console.log(planet.length);

console.log(
  `Your Rover is operative and positioned at X:${location.x} Y:${location.y}`
);
elaborateCommans(commands);
/* console.log("Your location is X: " + location.x + " Y: " + location.y); */
