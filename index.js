const express = require('express');
const app = express();
const cors = require('cors');
const { getAll, getPregunta, getPreguntasCategoria, getCategorias } = require('./ServicioTrivial');

corsOptions = {
  orign:'*',
  methods:'GET'
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//-------------------------------------------------------//

app.get('/todo', async (req, res) => {

  try {
    const datos = await getAll();
    res.json(datos);
  } 

  catch (error) {
    res.status(500).json({ error: error.message });
  }
  
});


//-------------------------------------------------------//

app.get('/pregunta', async (req, res) => {

  const id = req.query.id;

  try {
    const datos = await getPregunta(id-1);
    res.json(datos);
  } 

  catch (error) {
    res.status(500).json({ error: error.message });
  }
  
});

//-------------------------------------------------------//

app.get('/preguntas-categoria', async (req, res) => {

  const categoria = req.query.categoria;

  try {
    const datos = await getPreguntasCategoria(categoria);
    res.json(datos);
  } 

  catch (error) {
    res.status(500).json({ error: error.message });
  }
  
});

//-------------------------------------------------------//

app.get('/categorias', async (req, res) => {

  try {
    const datos = await getCategorias();
    res.json(datos);
  } 

  catch (error) {
    res.status(500).json({ error: error.message });
  }
  
});

//-------------------------------------------------------//

app.listen(3000, () => {
  console.log('Servidor funcionando...');
});