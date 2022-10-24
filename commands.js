import { moveRover } from "./index.js";

export const commands = ["S", "W", "W", "S"];

export const elaborateCommans = (commands) => {
  for (let i = 0; i < commands.length; i++) {
    let command = commands[i];
    moveRover(command);
  }
};
