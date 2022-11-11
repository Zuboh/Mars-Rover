import { moveRover } from "./index.js";

export const commands = [];
function generateCommands() {
  let result = "";
  let cardinals = "NSNS";
  for (var i = 0; i < 4; i++) {
    result = cardinals.charAt(Math.floor(Math.random() * cardinals.length));
    commands.push(result);
  }
}
generateCommands();
console.log(commands);

export const elaborateCommands = (commands) => {
  for (let i = 0; i < commands.length; i++) {
    let command = commands[i];
    moveRover(command);
  }
};
