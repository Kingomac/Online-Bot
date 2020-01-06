<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-btn block color="secondary" :disabled="loading" :loading="loading" @click="loadPreguntasRespuestas">Cargar preguntas y respuestas</v-btn>
        <v-list>
          <v-list-item-group color="secondary">
          <PreguntaRespuesta v-on:reload-data="loadPreguntasRespuestas" v-for="p in preguntas_respuestas" v-bind:key="p._id" :baseUrl="baseUrl" :elemento="p"></PreguntaRespuesta>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="12" md="4">
      </v-col>
      <v-col cols="12" md="4">
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import PreguntaRespuesta from '../components/PreguntaRespuesta'

export default {
  components:{
    PreguntaRespuesta
  },
  data(){
    return{
      loading: false,
      preguntas_respuestas: [],
    }
  },
  props: ['baseUrl'],
  methods: {
    loadPreguntasRespuestas: function(){
      this.loading = true;
      this.axios.get(this.baseUrl + 'admin/preguntas-respuestas').then((e) => {
        this.preguntas_respuestas = e.data;
        this.loading = false;
      })
    }
  }
}
</script>