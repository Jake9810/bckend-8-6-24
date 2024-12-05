const read = require('node:readline');

const myRl= read.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (message) => {
  return new Promise((resolve, reject) => {
    myRl.question(message, (answer) => {
      answer ? resolve(answer) : reject(new Error('Ocurrio un error'));
    });
  });
}

(async () => {
  const color = await askQuestion('What is your favorite color?');
  console.log(color);
  const dish = await askQuestion('What is your favorite dish?');
  console.log(dish);
})();