const parseEnv = () => {
  Object.keys(process.env)
  .forEach(el => {
    let count = 0;
    if(el.startsWith("RSS_")){
      count+=1;
      console.log(`RSS_name${count} = ${process.env[el]}`);
    }
  });
};

parseEnv();