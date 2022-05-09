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
          <v-card
            dark
            elevation="12"
            :loading="loaded"
          >
            <!-- height="330"
            width="3000" -->
            <v-img
              contain
              lazy-src="../assets/myLogo.png"
              :src="images[0].url"
              class="grey darken-4"
            />
            <v-card-title
              max-height="10"
              class="text-h6"
            >
              max-height
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            dark
            elevation="12"
          >
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
        <v-text-field
          :value="comm"
        />
      </v-row>
    </v-fade-transition>
    <v-row justify="space-around">
      <v-card width="400">
        <v-img
          height="200px"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        >
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >
            <v-app-bar-nav-icon color="white" />

            <v-toolbar-title class="text-h6 white--text pl-0">
              Messages
            </v-toolbar-title>

            <v-spacer />

            <v-btn
              color="white"
              icon
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>

          <v-card-title class="white--text mt-8">
            <v-avatar size="56">
              <img
                alt="user"
                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
              >
            </v-avatar>
            <p class="ml-3">
              John Doe
            </p>
          </v-card-title>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Today
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> @{{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    components: {
    },
    data () {
      //
      return {
        comm: '',
        loaded: false,
        images: [
          {
            id: 1,
            url: 'https://drive.google.com/uc?id=1HL8w8-r-XnEgS_19JdzYGOJCXDDOpqA-',
          },
          {
            id: 2,
            url: 'https://drive.google.com/uc?id=',
          },
        ],
        messages: [
          {
            from: 'You',
            message: 'Sure, I\'ll see you later.',
            time: '10:42am',
            color: 'deep-purple lighten-1',
          },
          {
            from: 'John Doe',
            message: 'Yeah, sure. Does 1:00pm work?',
            time: '10:37am',
            color: 'green',
          },
          {
            from: 'You',
            message: 'Did you still want to grab lunch today?',
            time: '9:47am',
            color: 'deep-purple lighten-1',
          },
        ],
        //
      }
    },
  }

</script>
