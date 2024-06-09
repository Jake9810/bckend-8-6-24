//se usa npm i express para instalar el paquete express
const express=require('express');
//se tiene que crear una instancia de express
const app=express();

const port=3000;
app.listen(port,()=>{
  console.log('server is running on port',port);
})