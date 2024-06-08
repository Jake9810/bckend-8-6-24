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