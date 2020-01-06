const express = require('express');
const router = express.Router();
const PreguntaRespuesta = require('../models/pregunta_respuesta');

router.get('/preguntas-respuestas', async (req, res) => {
  let result = await PreguntaRespuesta.find();
  res.json(result);
})

router.delete('/borrar/:_id', async (req, res) => {
  console.log(`Deleting _id:${req.params._id}`);
  PreguntaRespuesta.deleteOne({_id: req.params._id}).exec().then((e) => {
    res.send(e)
  }).catch((e) => {
    res.send(e);
  })
})

module.exports = router;