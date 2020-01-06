<template>
  <v-app>
    <v-app-bar app clipped-left dark>
      <div class="headline">Simisimisimisimi</div>
      <v-spacer></v-spacer>
      <v-btn to="/" v-if="this.$router.currentRoute.name == 'admin'" icon><v-icon>mdi-arrow-left-circle</v-icon></v-btn>
      <v-btn to="/admin" v-else icon><v-icon>mdi-settings</v-icon></v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid>
      <router-view :baseUrl="baseUrl"></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data(){
    return {
      baseUrl: 'http://localhost:3000/'
    }
  },
};
</script>
