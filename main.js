let helpFunc=require("./commands/help");
let orgFunc = require("./commands/organize");
let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path = inputArr[1];

switch (command) {
    case "tree":
        // call tree function.
        console.log("Tree is called");
        break;
    case "organize":
        // call organixe function
        orgFunc.organize(path);
        break;
    case "help":
        // call help function
        // console.log("Tree is called");
        helpFunc.help();
        break;
    default:
        console.log("Unrecognized command/n");
        break;
}

