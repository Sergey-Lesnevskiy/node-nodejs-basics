import { argv } from 'node:process';



const parseArgs = () => {
  const passedArgs = argv.slice(2)
  const parsedArgs = {}
  while(passedArgs.length > 0){
    const argName = passedArgs.shift().slice(2);
    const argValue = passedArgs.shift();
    parsedArgs[argName] = argValue;
  }
  const stringifiedArg = Object.entries(parsedArgs).map(([key,value])=> `${key} is ${value}`).join(", ")
    console.log(stringifiedArg);
};

parseArgs();