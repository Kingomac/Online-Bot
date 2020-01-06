<template>
<v-container>
    <v-row>
      <v-col class="mr-6" cols="11" sm="5">
        <v-row>
          <v-textarea outlined auto-grow readonly v-model="texto"></v-textarea>
          <v-col cols="9" sm="11">
            <v-text-field placeholder="Escribe..." v-model="pregunta"></v-text-field>
          </v-col>
          <v-col cols="3" sm="1">
            <v-btn rounded align="end" @click="preguntar"><v-icon>mdi-send</v-icon></v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="ml-6" cols="11" sm="5">
        <v-text-field placeholder="pregunta" v-model="add_pregunta"></v-text-field>
        <v-text-field placeholder="respuesta" v-model="add_respuesta"></v-text-field>
        <v-btn block @click="add"><v-icon>mdi-plus-circle</v-icon></v-btn>
      </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
      texto: '',
      pregunta: '',
      add_pregunta: '',
      add_respuesta: ''
    }
  },
  props: ['baseUrl'],
  methods: {
    preguntar: function(){
      this.texto += `${this.pregunta}\n`
      this.axios.post(this.baseUrl + 'preguntar',{}, {
        params: {
          pregunta: this.pregunta
        }
      }).then((e) => {
        const respuestas = JSON.parse(e.request.response);
        console.log(respuestas);
        const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];
        this.texto += `${respuesta.respuesta}\n`
        this.pregunta = ''
      })
    },
    add: function(){
      this.axios.post(this.baseUrl + 'add-pregunta', {}, {
        params: {
          pregunta: this.add_pregunta,
          respuesta: this.add_respuesta
        }
      }).then(() => {
        this.add_pregunta = '';
        this.add_respuesta = '';
      }).catch((e) => {
        console.log(e);
      })
    }
  }
}
</script>
