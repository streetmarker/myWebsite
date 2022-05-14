<template>
  <v-container
    id="dashboard-view"
    tag="section"
    class="fill-height"
    fluid
    style="min-height: 434px"
  >
    <!-- <div class="hello">
    <p>create</p>
    <input type="text" v-model="text" placeholder="post">
    <button v-on:click="createPost">Post!</button>
    <div
      v-for="(post, index) in posts"
      v-bind:item="post"
      v-bind:index="index"
      v-bind:key="post._id"
      v-on:dblclick="deletePost(post._id)"
    >
      <p>{{post.text}}</p>
    </div>
    <P v-if="error">{{error}}</P>
    <p>END</p>
  </div> -->
    <span style="font-size: 250%">&#171;</span>
    <span style="font-size: 200%">&#171; MENU</span>
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

        <v-col cols="12">
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
          </v-card>
        </v-col>

        <!-- <v-col cols="4">
          <v-card
            dark
            elevation="12"
          >
            <v-img
              :src="images[1].url"
              max-height="1250"
              contain
              class="grey darken-4"
            />
          </v-card>
        </v-col>
        <v-col cols="8">
          <v-card
            dark
            elevation="12"
          >
            <v-img
              :src="images[2].url"
              max-height="1250"
              contain
              class="grey darken-4"
            />
          </v-card> -->
        <!-- </v-col> -->

        <!-- <v-form
          ref="form"
          @submit.prevent="submit"
        > -->
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="text"
            requied
            :rules="rules.name"
            max-width="100px"
            label="Dodaj komentarz"
            outlined
            clearable
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-btn
            style="font-family: roboto"
            color="amber darken-1"
            @click="createPost"
          >
            Dodaj!
          </v-btn>
        </v-col>
      </v-row>
    </v-fade-transition>
    <v-row justify="space-around">
      <v-card width="400">
        <v-img
          height="200px"
          src="../assets/clint-mckoy.jpg"
        >
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >
            <v-app-bar-nav-icon color="black" />

            <v-toolbar-title
              dark
              class="text-h6 black--text pl-0"
            >
              Commts
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
            <v-avatar />
            <p class="ml-3" />
          </v-card-title>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2" />

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="(post, index) in posts"
              :key="post._id"
              :item="post"
              :index="index"
              small
              @dblclick="deletePost(post._id)"
            >
              <div>
                <!-- <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> @{{ message.time }}
                </div> -->
                <div v-if="post.text">{{ post.text }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  import PostService from '../PostService'

  export default {
    data () {
      //
      // const defaultForm = Object.freeze({
      //   first: '',
      //   last: '',
      //   bio: '',
      //   favoriteAnimal: '',
      //   age: null,
      //   terms: false,
      // })
      return {
        // mongodb
        posts: [],
        error: '',
        text: '',
        //
        // form: Object.assign({}, defaultForm),
        // defaultForm,
        // comm: '',
        loaded: false,
        images: [
          {
            id: 1,
            url:
              'https://drive.google.com/uc?id=1SI_aFUvQ0I3BLRUlVvHF30oT6wq12L3E',
          },
          // {
          //   id: 2,
          //   url: 'https://drive.google.com/uc?id=1AQkgBae1bv2pWdw8Tn5pSQ-nv_MdErOf',
          // },
          // {
          //   id: 3,
          //   url: 'https://drive.google.com/uc?id=1C0gM8ebbrILGTBPz8p9lxQ64aD-Zmf--',
          // },

        ],
        messages: [
          {
            from: 'You',
            message: "Sure, I'll see you later.",
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
        rules: {
          age: [val => val < 10 || 'I don\'t believe you!'],
          animal: [val => (val || '').length > 0 || 'This field is required'],
          name: [val => (val || '').length > 0 || 'This field is required'],
        },
      //
      }
    },
    async created () {
      try {
        this.posts = await PostService.getPosts()
      } catch (err) {
        this.error = err.message
      }
    },
    // computed: {
    //   formIsValid () {
    //     return (
    //       this.form.first &&
    //       this.form.last &&
    //       this.form.favoriteAnimal &&
    //       this.form.terms
    //     )
    //   },
    // },
    methods: {
      async createPost () {
        await PostService.insertPost(this.text)
        this.posts = await PostService.getPosts()
      },
      async deletePost (id) {
        await PostService.deletePost(id)
        this.posts = await PostService.getPosts()
      },
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        this.snackbar = true
        this.resetForm()
      },
    },
  }
</script>
