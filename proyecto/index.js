//se usa npm i express para instalar el paquete express
const express=require('express');
//se tiene que crear una instancia de express
const app=express();

const port=3000;
const clientes ={
  c1:{
    nombre:'Juan',
    apellido:'Perez',
    spendAmount:'30'
  }
}

app.get('/clientes',(req,res)=>{
  res.status(200).json(clientes,
                      message: 'lista de clientes'');
});

app.post('/clientes',(req,res)=>{
  const info=req.body; //información
  const clientsAmount =(Object.keys(clientes).length)+1;
  res.status(201).json(clientes,
                      mesage: 'lista de clientes actualizada');
});


app.listen(port,()=>{
  console.log('server is running on port',port);
})
/*
  para crear queries se usa ?
  /clientes/invoices/taxes?minvalue=100&maxvalue=200

  (parametros) para especificar dentro de toda la entidad a que recurso me estoy refiriendo se usa :
  /clientes/:id/invoices/taxes/:invoiceId
  se puede hacer una busqueda más extensa de la siguiente manera
  /clientes/:id/invoices/taxes/:invoiceId/taxis/:taxId
  
*/