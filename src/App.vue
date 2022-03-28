<template>
  <div id="app">
    <v-app dark>
      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div> -->
      <router-view/>

      <v-footer class="px-2">
        <!-- <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="grey--text text--darken-2" ml-2>
              Hecho con
              <v-icon class="grey--text text--darken-2" small="'true'">favorite</v-icon>
              gracias a
              <a class="grey--text text--darken-2" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
            </div>
          </v-flex>
        </v-layout> -->
        <v-spacer></v-spacer>
        <div class="grey--text text--darken-2">
          Hecho con
          <a class="grey--text text--darken-2" href="https://nodejs.org" target="_blank"><v-icon class="grey--text text--darken-2" small>mdi-nodejs</v-icon></a>, 
          <a class="grey--text text--darken-2" href="https://vuetifyjs.com" target="_blank"><v-icon class="grey--text text--darken-2" small>mdi-vuetify</v-icon></a> y
          <v-icon class="grey--text text--darken-2" small>mdi-heart</v-icon>.
          Código fuente: <a class="grey--text text--darken-2" href="https://github.com/RodrigoRoy/lais-guatemala-web" target="_blank"><v-icon class="grey--text text--darken-2" small>mdi-github</v-icon></a>
        </div>
      </v-footer>
    </v-app>
  </div>
</template>
