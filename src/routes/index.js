/*
Tipos de frases:
- Saludos
- Preguntas y respuestas (pregunta directa)
- Temáticas
- Espontáneas (cuando no dices nada) *** (si apetece, sino no)

*/

const express = require('express');
const router = express.Router();
const PreguntaRespuesta = require('../models/pregunta_respuesta');

router.post('/preguntar', async (req, res) => {
  console.log(req.query.pregunta);
  try{
    const pregunta = await darFormatoPregunta(req.query.pregunta)
    const resultado = await PreguntaRespuesta.find({pregunta});
    res.json(resultado);
  }
  catch{
    res.json({error: 'Error en la busqueda en la base de datos'});
  }
})

router.post('/add-pregunta', async (req, res) => {
  const data = {
    pregunta: await darFormatoPregunta(req.query.pregunta),
    respuesta: req.query.respuesta
  }
  const pregunta_respuesta = new PreguntaRespuesta(data);
  await pregunta_respuesta.save().then(e => res.send(e)).catch(e => res.send(e));
})

async function darFormatoPregunta(p){
  let resultado = p.toLowerCase().replace('á', 'a').replace('é', 'e').replace('í', 'i').replace('ó', 'o').replace('ú', 'u').replace('¿', '');
  while(resultado.endsWith(' ')){
    resultado = resultado.substring(0, resultado.length - 1);
  }
  while(resultado.startsWith(' ')){
    resultado = resultado.substring(1, resultado.length);
  }
  return resultado;
}

module.exports = router;