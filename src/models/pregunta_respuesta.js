const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PreguntaRespuesta = new Schema({
  pregunta: String,
  respuesta: String,
  creacion: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('preguntas_respuestas', PreguntaRespuesta);