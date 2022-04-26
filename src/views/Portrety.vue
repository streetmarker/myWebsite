/* eslint-disable semi */
/* eslint-disable semi */
<template>
  <v-container
    id="dashboard-view"
    tag="section"
    class="fill-height"
    fluid
    style="min-height: 434px"
  >
    <v-fade-transition mode="out-in">
      <v-row>
        <!-- <v-col cols="6">
          <v-card>
            <v-img
              src="https://picsum.photos/350/165?random"
              height="125"
              class="grey darken-4"
            />
            <v-card-title class="text-h6">
              height
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src="https://picsum.photos/350/165?random"
              height="125"
              contain
              class="grey darken-4"
            />
            <v-card-title class="text-h6">
              height with contain
            </v-card-title>
          </v-card>
        </v-col> -->

        <v-col cols="6">
          <v-card>
            <v-img
              src="https://drive.google.com/uc?id=1HL8w8-r-XnEgS_19JdzYGOJCXDDOpqA-"
              max-height="1250"
              class="grey darken-4"
            />
            <v-card-title class="text-h6">
              max-height
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src="https://wokolmotoryzacji.pl/wp-content/uploads/2019/12/35GT-RR_w_R2-1024x576.jpeg"
              max-height="1250"
              contain
              class="grey darken-4"
            />
            <v-card-title class="text-h6">
              max-height with contain
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-container>
</template>

<script>
  export default {
    components: {
    },
    data () {
      //
    },
  }

</script>
