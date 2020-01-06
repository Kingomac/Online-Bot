<template>
  <v-list-item three-line>
    <v-list-item-content>
      <v-list-item-subtitle>
        {{elemento.creacion}}
      </v-list-item-subtitle>
      <v-list-item-title>
        {{elemento.pregunta}}
      </v-list-item-title>
      {{elemento.respuesta}}
      <v-list-item-action>
      <v-btn icon @click="borrar"><v-icon>mdi-delete</v-icon></v-btn>
    </v-list-item-action>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
export default {
  props: ['elemento', 'baseUrl'],
  methods: {
    borrar: function(){
      this.axios.delete(this.baseUrl + 'admin/borrar/' + this.elemento._id).then(() => {
        this.$emit('reload-data');
      });
    }
  }
}
</script>