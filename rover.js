var objectList = [];

var helena = {
  position: [0,0],
  direction: 'N'
};

objectList.push(helena);

function reset(rover) {
  rover.position = [0,0];
  console.log("Position is now: " + rover.position);
}

function grid(rover) {
  if (rover.position[0] > 10) {
  rover.position[0] = -10;
} else if (rover.position[1] > 10) {
  rover.position[1] = -10;
} else if (rover.position[0] < -10) {
  rover.position[0] = 10;
}  else if (helena.position[1] < -10) {
  rover.position[1] = 10;
  }
}

function turnLeft(rover) {
  var left = rover.direction;
  switch (left) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
  }
}

function turnRight(rover) {
  var right = rover.direction;
  switch (right) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
}

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]--;
      break;
  }
  grid(rover);
}

function goBack(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--;
      break;
    case 'E':
      rover.position[1]--;
      break;
    case 'S':
      rover.position[0]++;
      break;
    case 'W':
      rover.position[1]++;
      break;
  }
  grid(rover);
}

function instructionSet(rover, command) {
  for (var i = 0; i < command.length; i++) {
    switch(command[i]) {
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "f":
        goForward(rover);
        break;
      case "b":
        goBack(rover);
        break;
      default:
        console.log("Unknown Command");
        break;
    }
    console.log("Final Direction: " + rover.direction, "Final Position: " + rover.position);
  }
}

instructionSet(helena, "rfffffffffffffffffffff");
