<template>
  <v-container
    id="google-maps-view"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        v-for="(item, i) in maps"
        :key="i"
        :md="i !== 0 ? 6 : undefined"
        cols="12"
      >
        <material-card
          :heading="item.heading"
          color="accent"
        >
          <v-card-text>
            <v-sheet>
              <iframe
                :src="`https://www.google.com/maps/embed?${item.iframe}`"
                allowfullscreen
                frameborder="0"
                height="450"
                style="border:0"
                width="100%"
              />
            </v-sheet>
          </v-card-text>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'GoogleMapsView',

    data: () => ({
      maps: [
        {
          heading: 'Satellite Map',
          iframe: 'pb=!1m18!1m12!1m3!1d156389.09520356447!2d20.921111334332952!3d52.23285504212421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1648922551425!5m2!1spl!2spl',
        },
        // {
        //   heading: 'Satellite Map',
        //   iframe: 'pb=!1m18!1m12!1m3!1d193595.15831228695!2d-74.11976206978034!3d40.697663747508045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY!5e0!3m2!1sen!2sus!4v1566158235149!5m2!1sen!2sus',
        // },
        // {
        //   heading: 'Custom Skin & Settings Map',
        //   iframe: 'pb=!1m18!1m12!1m3!1d193595.15831228695!2d-74.11976206978034!3d40.697663747508045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY!5e0!3m2!1sen!2sus!4v1566158235149!5m2!1sen!2sus',
        // },
      ],
    }),
  }
</script>
