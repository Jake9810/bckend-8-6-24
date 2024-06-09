//se usa npm i express para instalar el paquete express
const express=require('express');
//se tiene que crear una instancia de express
const app=express();

const port=3000;
app.listen(port,()=>{
  console.log('server is running on port',port);
})
/*
  para crear queries se usa ?
  /clientes/invoices/taxes?minvalue=100&maxvalue=200

  para especificar dentro de toda la entidad a cual me estoy refiriendo se usa :
  /clientes/:id/invoices/taxes/:invoiceId
  se puede hacer una busqueda más extensa de la siguiente manera
  /clientes/:id/invoices/taxes/:invoiceId/taxis/:taxId
  
*/