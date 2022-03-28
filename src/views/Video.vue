<template>
  <v-container grid-list-lg>
    <h1 class="display-1 font-weight-medium text-xs-center my-3">Experiencias de trabajadoras y trabajadores circulares en Guatemala:</h1>
    <h2 class="headline font-weight-medium text-xs-center my-3">Historias familiares, trayectorias laborales, paso por la frontera y relaciones con los mexicanos</h2>
    <v-layout row wrap>
      <v-flex xs12 sm6 v-for="item in videos" :key="item.name" pa-3>
        <v-card>
          <v-layout>
            <v-flex xs12 sm5>
              <v-img :src="require('../assets/' + item.image)" height="125px" contain></v-img>
            </v-flex>
            <v-flex xs12 sm7>
              <v-card-title primary-title>
                <div>
                  <div class="headline" v-text="item.name"></div>
                  <div>Fecha: {{item.date}}</div>
                  <div>Lugar: {{item.place}}</div>
                  <div>Duración: {{item.time}}</div>
                  <div>Entrevistadora: {{item.interview}}</div>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-card-actions class="pa-3">
            <v-spacer></v-spacer>
            <v-btn flat class="teal--text text--lighten-2" :href="item.filename">Video <v-icon>mdi-video</v-icon></v-btn>
            <!-- <v-dialog v-model="dialog" width="886">
              <template v-slot:activator="{ on }">
                <v-btn flat class="teal--text text--lighten-2" v-on="on">
                  Video <v-icon>videocam</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-text>
                  <video controls width="852">
                    <source :src="'../../video/' + item.filename" type="video/mp4">
                    Lo siento, tu navegador no soporta reproducción de video.
                  </video>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="teal" class="teal--text text--lighten-2" flat @click="dialog = false" >
                    Cerrar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog> -->
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      videos: [
        {name: 'Carina León Escalante', description: 'Carinanita2_1200Kbps_480p.mp4', filename: 'Carinanita2_1200Kbps_480p.mp4', image: 'av_Carina_thumb.jpg', date: '22 de mayo de 2018', place: 'Caserío San Agustín', time: '07:01', interview: 'Claudia Barrientos Arana de Arriaga'},
        {name: 'Efrén Maldonado', description: 'Efrén Maldonado_1200Kbps_480p.mp4', filename: 'Efrén Maldonado_1200Kbps_480p.mp4', image: 'av_Efren_thumb.jpg', date: '20 de mayo de 2018', place: 'Urbanización las Delicias', time: '11:55', interview: 'Claudia Barrientos Arana de Arriaga'},
        {name: 'Juana López de Girón', description: 'JUANITA_1200Kbps_480p.mp4', filename: 'JUANITA_1200Kbps_480p.mp4', image: 'av_Juanita_thumb.jpg', date: '21 de mayo de 2018', place: 'La Comunidad de las Brisas', time: '08:05', interview: 'Claudia Barrientos Arana de Arriaga'},
        {name: 'Marconi Monterroso', description: 'Marconi Monterroso_1200Kbps_480p.mp4', filename: 'Marconi Monterroso_1200Kbps_480p.mp4', image: 'av_Marconi_thumb.jpg', date: '20 de mayo de 2018', place: 'Urbanización las Delicias', time: '11:23', interview: 'Claudia Barrientos Arana de Arriaga'},
        {name: 'Petrona Ayala', description: 'Petrona Ayala_1200Kbps_480p.mp4', filename: 'Petrona Ayala_1200Kbps_480p.mp4', image: 'av_Petrona_thumb.jpg', date: '23 de mayo de 2018', place: 'Caserío San Agustín', time: '09:32', interview: 'Claudia Barrientos Arana de Arriaga'},
        {name: 'Rosemery Lorena', description: 'ROSEMERY_1200Kbps_480p.mp4', filename: 'ROSEMERY_1200Kbps_480p.mp4', image: 'av_Rosmeri_thumb.jpg', date: '26 de mayo de 2018', place: 'Aldea Nuevo San Antonio', time: '08:33', interview: 'Claudia Barrientos Arana de Arriaga'},
      ],
      dialog: false,
    })
  }
</script>

<style>

</style>
