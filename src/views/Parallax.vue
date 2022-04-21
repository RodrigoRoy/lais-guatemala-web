<template>
  <v-container fluid pa-0 ma-0>

    <!-- INICIO - INTRODUCCIÓN -->
    <section>
      <v-parallax :src="require('../assets/Fondo_puente_guatemala.jpg')" height="750">
        <v-layout column align-center justify-center class="white--text hidden-xs-only">
          <h1 class="mb-5 display-2 text-xs-center text-uppercase">Región Transfronteriza México-Guatemala: <br /><small>Dimensión regional y bases para su desarrollo integral</small></h1>
          <div class="title mt-5 text-xs-center" style="max-width: 1000px;">
            Sitio conformado por dos acervos, fotográfico y audiovisual, y dos productos de la primera etapa del proyecto. Los acervos han sido generados a partir de registros en campo y recopilados en trabajo de archivo, junto con varios testimonios orales de trabajadoras y trabajadores circulares migrantes. Los productos consisten en una exposición fotográfica y un proyecto de software libre desarrollado para albergar esta diversidad de recursos para la investigación.
          </div>
        </v-layout>
        <!-- Para tamaño de pantalla muy pequeño: -->
        <v-layout column align-center justify-center class="white--text hidden-sm-and-up text-xs-center">
          <h1 class="display-1 mb-3">Región Transfronteriza México-Guatemala: <br /><small>Dimensión regional y bases para su desarrollo integral</small></h1>
          <p>
            Sitio conformado por dos acervos, fotográfico y audiovisual, y dos productos de la primera etapa del proyecto. Los acervos han sido generados a partir de registros en campo y recopilados en trabajo de archivo, junto con varios testimonios orales de trabajadoras y trabajadores circulares migrantes. Los productos consisten en una exposición fotográfica y un proyecto de software libre desarrollado para albergar esta diversidad de recursos para la investigación.
          </p>
        </v-layout>
      </v-parallax>
    </section>

    <!-- ACERVOS EN ACCESO ABIERTO -->
    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12>
            <div class="text-xs-center">
              <h2 class="display-1 mb-2 font-weight-medium">Acervos documentales</h2>
            </div>
          </v-flex>
          <v-flex xs12 sm6 v-for="item in acervos" :key="item.name">
            <v-hover>
              <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="elevation-0 transparent" @click="goTo(item.link, item.internalLink)" style="cursor: pointer">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="teal--text text--lighten-2" v-text="item.icon"></v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center mx-5 px-5" v-text="item.name"></div>
                </v-card-title>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <!-- PRODUCTOS -->
    <section>
      <v-parallax :src="require('../assets/UnPaisajeFronterizo_Expo_dark.jpg')" height="500">
        <v-container fluid grid-list-xl>
          <v-layout row wrap align-start justify-space-around>
            <v-flex xs12 class="text-xs-center white--text my-3">
              <h2 class="display-1 mb-2 mt-5 font-weight-medium">Productos</h2>
            </v-flex>
            <v-flex xs12 md6 class="text-xs-center white--text">
              <p class="headline hidden-sm-and-down">
                Exposición fotográfica: <br />
                Un Paisaje Fronterizo<br />
                Cruces e itinerarios en la línea México-Guatemala
              </p>
              <p class="title hidden-md-and-up" :class="{'body-2': $vuetify.breakpoint.xs}">
                Exposición fotográfica: Un Paisaje Fronterizo. Cruces e itinerarios en la línea México-Guatemala
              </p>
              <p>
                <v-btn class="teal lighten-2" dark large href="http://lais.mora.edu.mx/expo" target="_blank">
                  Ver sitio
                </v-btn>
              </p>
            </v-flex>
            <v-flex xs12 md6 class="text-xs-center white--text">
              <p class="headline hidden-sm-and-down">
                Sistema Informático de Documentación<br />
                Fotográfica y Audiovisual<br />
                para Investigación Social
              </p>
              <p class="title hidden-md-and-up" :class="{'body-2': $vuetify.breakpoint.xs}">
                Sistema Informático de Documentación Fotográfica y Audiovisual para Investigación Social
              </p>
              <p>
                <v-btn class="teal lighten-2" dark large href="https://github.com/RodrigoRoy/lais-fotografia" target="_blank">
                  Ver sitio
                </v-btn>
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-parallax>
    </section>

    <!-- ACERCA DEL LAIS. INSTITUCIONES -->
    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Acerca del LAIS</div>
              </v-card-title>
              <v-card-text>
                <p>
                  El Laboratorio Audiovisual de Investigación Social (LAIS) es un espacio colectivo e interdisciplinario dedicado a la investigación social con imágenes. Desde 2002 realiza estudios que incorporan imágenes como fuentes primarias de investigación y como medio de divulgación de las investigaciones sociales.
                </p>
                <p class="text-xs-center">
                  <v-dialog v-model="dialog" max-width="500">
                    <template v-slot:activator="{ on }">
                      <v-btn dark large v-on="on">Créditos</v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="headline teal darken-3 text-xs-center text-capitalize" primary-title>
                        CRÉDITOS
                      </v-card-title>

                      <v-card-text class="text-xs-center">
                        <div>
                          <p class="headline">
                            Entrevistas
                          </p>
                          <p class="body-2">
                            Claudia Barrientos Arana de Arriaga
                          </p>
                          <p class="headline pt-4">
                            Trabajo de campo
                          </p>
                          <p class="body-2">
                            Mauricio Cervantes Salas
                          </p>
                          <p class="headline pt-4">
                            Fotografías
                          </p>
                          <p class="body-2">
                            Felipe Morales Leal<br />
                            Carlos Hernández Marines
                          </p>
                          <p class="headline pt-4">
                            Registros audiovisuales
                          </p>
                          <p class="body-2">
                            Carlos Hernández Marines<br />
                            Felipe Morales Leal
                          </p>

                          <p class="headline pt-4">
                            Trabajo de archivo
                          </p>
                          <p class="body-2">
                            Lilia García Torres<br />
                            Con el apoyo de CIRMA
                          </p>

                          <p class="headline pt-4">
                            Catalogación
                          </p>
                          <p class="body-2">
                            Astrid Ruiz Nava<br />
                            Carlos Hernández Marines<br />
                            Felipe Morales Leal<br />
                            Irene Hernández Oliva<br />
                            Lilia García Torres<br />
                            Verónica García Martínez<br />
                            Rodrigo Colín Rivera<br />
                            Lourdes Roca
                          </p>

                          <p class="headline pt-4">
                            Posproducción audiovisual
                          </p>
                          <p class="body-2">
                            Carlos Hernández Marines<br />
                            Felipe Morales Leal
                          </p>

                          <p class="headline pt-4">
                            Desarrollo informático
                          </p>
                          <p class="body-2">
                            Rodrigo Colín Rivera
                          </p>

                          <p class="headline pt-4">
                            Desarrollo web
                          </p>
                          <p class="body-2">
                            Rodrigo Colín Rivera
                          </p>

                          <p class="headline pt-4">
                            Exposición fotográfica
                          </p>
                          <p class="body-2">
                            Laboratorio Audiovisual de Investigación Social
                          </p>

                          <p class="headline pt-4">
                            Coordinación general
                          </p>
                          <p class="body-2">
                            Lourdes Roca
                          </p>

                          <p class="headline pt-4">
                            Agradecimientos
                          </p>
                          <p class="body-2">
                            Marveli Robledo<br />
                            Juan Bautista Hernández Andrés<br />
                            David Lutín<br />
                            Anaís García<br />
                            Edgar Barillas<br />
                            CIRMA
                          </p>
                        </div>
                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="teal lighten-2" flat @click="dialog = false">
                          Cerrar
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-text>
                <p class="headline text-xs-center mb-0">Productores</p>
                <v-container fluid grid-list-sm>
                  <v-layout align-center>
                    <v-flex xs6>
                      <a href="http://lais.mora.edu.mx/">
                        <v-img :src="require('../assets/logo_lais_white.png')" height="64" contain></v-img>
                      </a>
                    </v-flex>
                    <v-flex xs6>
                      <a href="https://www.institutomora.edu.mx/Inicio.html">
                        <v-img :src="require('../assets/logo_mora_white.svg')" height="64" contain></v-img>
                      </a>
                    </v-flex>
                  </v-layout>
                </v-container>

                <p class="subheading text-xs-center mb-0">
                  En el marco del proyecto<br />
                  <span class="body-2">Región Transfronteriza México-Guatemala</span>
                </p>
                <v-container fluid grid-list-sm>
                  <v-layout align-center>
                    <v-flex xs12>
                      <a href="http://www.rtmg.org/">
                        <v-img :src="require('../assets/logo_rtmg_white.svg')" height="64" contain></v-img>
                      </a>
                    </v-flex>
                  </v-layout>
                </v-container>

                <p class="headline text-xs-center mb-0">Con el apoyo de</p>
                <v-container fluid grid-list-sm>
                  <v-layout align-center>
                    <v-flex xs6>
                      <a href="https://www.centrogeo.org.mx/">
                        <v-img :src="require('../assets/centrogeo.png')" height="64" contain></v-img>
                      </a>
                    </v-flex>
                    <v-flex xs6>
                      <a href="https://www.conacyt.gob.mx/">
                        <v-img :src="require('../assets/logo_conacyt_white.svg')" height="64" contain></v-img>
                      </a>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      acervos: [
        { name: 'Fotográfico', description: 'Documentación de fotografias en campo y recopilación de imagenes de archivo (Fototeca Guatemala, CIRMA).', link: 'https://whackiest-crab-1400.dataplicity.io/', icon: 'mdi-camera', internalLink: false},
        { name: 'Audiovisual', description: 'Documentación de entrevistas y registros en video de Guatemala', link: 'video', icon: 'mdi-video', internalLink: true},
      ],
      // productores: [
      //   { name: 'LAIS', image: 'logo_lais_white.png', link: 'http://lais.mora.edu.mx/'},
      //   { name: 'Instituto Mora', image: 'logo_mora_white.svg', link: 'https://www.institutomora.edu.mx/Inicio.html'},
      //   { name: 'CentroGeo', image: 'centrogeo.png', link: 'https://www.centrogeo.org.mx/'},
      //   { name: 'RTMG', image: 'logo_rtmg_white.svg', link: 'http://www.rtmg.org/'},
      //   { name: 'Conacyt', image: 'logo_conacyt_white.svg', link: 'https://www.conacyt.gob.mx/'},
      // ],
      dialog: false
    }),
    methods:{
      goTo: function(link, isRouterLink){
        if(isRouterLink)
          this.$router.push(link);
        else
          window.open(link, '_blank');
      }
    }
  }
</script>

<style>

</style>
