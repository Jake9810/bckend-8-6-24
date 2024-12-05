/*require('./m2')//forma para mandar a traer una funcion, variable, etc. que fue exportada, el ./ sirve para indicar que es un archivo dentro de la misma carpeta
const m2Arrow=require('./m2')
//para acceder al recusro se tiene que hacer referencia a su propiedad como .
m2Arror.m2Function()

*/
//tambien se puede des estructurar el codigo para que sea mas legible, es decir
const arrow3=require('./m3');
arrow3();
const{m2Function: m2Arrow}=require('./m2');
/* *** */

console.log("Hello class m1");

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