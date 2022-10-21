let location = {
  x: 0,
  y: 0,
};

let rover = {
  direction: "N",
  location: location,
};

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

const roverLog = (location) => {};

const moveRover = (direction) => {
  let currentLocation;
  switch (direction) {
    case "N":
      location.y++;
      currentLocation = planet[location.x][location.y];
      if (currentLocation != "X") {
        foundObstacle(currentLocation);
      }
      break;
    case "S":
      location.y--;
      if (location.y < 0) {
        location.y = 0;
      }
      currentLocation = planet[location.x][location.y];
      console.log(currentLocation);
      break;
    case "E":
      location.x++;
      currentLocation = planet[location.x][location.y];
      console.log(currentLocation);
      break;
    case "W":
      location.x--;
      if (location.x < 0) {
        location.x = 0;
      }
      currentLocation = planet[location.x][location.y];
      console.log(currentLocation);
      break;
    default:
      console.log(
        " type N -> to go Nord \n type S -> to go Sud \n type E -> to go East \n type W -> to go West"
      );
      break;
  }
};

moveRover(rover.direction);

let keys = Object.keys(obstacles);

const foundObstacle = (currentLocation) => {
  for (keys in obstacles) {
    if (currentLocation == keys) {
      description = obstacles[keys].description;
    }
  }
  console.log("Obstacle: " + description);
};

/* console.log("Your location is X: " + location.x + " Y: " + location.y); */
foundObstacle("O");
