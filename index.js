const express = require('express');
const app = express();
const { getPregunta,getPreguntasCategoria, getCategorias } = require('./ServicioTrivial');

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