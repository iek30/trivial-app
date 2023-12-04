const express = require('express');
const app = express();
const { getPregunta,getPreguntasCategoria } = require('./ServicioTrivial');

app.get('/pregunta', async (req, res) => {

  try {
    const datos = await getPregunta(4);
    res.json(datos);
  } 

  catch (error) {
    res.status(500).json({ error: error.message });
  }
  
});

app.get('/categoria', async (req, res) => {

  const categoria = req.query.categoria;

  try {
    const datos = await getPreguntasCategoria(categoria);
    res.json(datos);
  } 

  catch (error) {
    res.status(500).json({ error: error.message });
  }
  
});


app.listen(3000, () => {
  console.log('Servidor funcionando...');
});