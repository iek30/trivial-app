const fs = require('fs').promises;
require('dotenv').config();

//Retorna una pregunta según el índice que le pasas como parámetro.
async function getPregunta(indice){

  try {
    const jsonString = await fs.readFile('trivial.json', 'utf-8');
    const trivialData = JSON.parse(jsonString);
    const pregunta = trivialData.preguntas[indice];
    return {datos: pregunta};
  } 
  catch (error) {
    throw new Error('Error');
  }

};

//Retorna las preguntas de la categoría indicada.
async function getPreguntasCategoria(categoria){
  try {
    const jsonString = await fs.readFile('trivial.json', 'utf-8');
    const trivialData = JSON.parse(jsonString);
    const preguntas = trivialData.preguntas;

    let filtradas = new Array();

    let objeto = {datos:filtradas};

    preguntas.forEach(pregunta => {
      if(pregunta.categoria == categoria){
        filtradas.push(pregunta);
      }
    });

    return objeto;
  } 
  catch (error) {
    throw new Error('Error');
  }
};

module.exports = { getPregunta };
module.exports = { getPreguntasCategoria };
