<template>
  <div id="dashboard">
    <v-card class="mx-auto">
      <v-container>
        <v-row>
          <v-col cols="12" sm="3">
            <v-row>
              <v-img
                class="white--text align-end justify-center align-center"
                min-height="100px"
                width="100%"
                :src="`${info_establishment.logo == '' ? defaultImage : info_establishment.logo}`"
              >
              </v-img>
            </v-row>
          </v-col>
          <v-col cols="12" sm="7">
            <v-card-title>{{ info_establishment.name }}</v-card-title>
            <v-card-text class="text--primary">
              <div class="headerClass">
                {{ info_establishment.description }}
              </div>
            </v-card-text>
          </v-col>
          <v-col cols="auto" class="pl-0">
            <v-row class="flex-column ma-0 fill-height">
              <v-col class="px-0">
                <v-chip class="ma-2">
                  <v-icon>mdi-facebook</v-icon>
                  Facebook
                </v-chip>
              </v-col>
              <v-col class="px-0">
                <v-chip class="ma-2">
                  <v-icon>mdi-twitter</v-icon>
                  Twitter
                </v-chip>
              </v-col>
              <v-col class="px-0">
                <v-chip class="ma-2">
                  <v-icon>mdi-cellphone</v-icon>
                  {{ info_establishment.phone }}
                </v-chip>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    
    <hr />

    <pending></pending>
  </div>
</template>

<script>
import axios from 'axios';
import Pending from '@/components/Pending.vue';

export default {
  name: 'dashboard',

  components: {
    Pending
  },

  data() {
    return {
      defaultImage: require('@/assets/default.jpg'),
      info_establishment: {
        name: '',
        description: '',
        phone: '',
        logo: '',
      }
    }
  },

  created() {
    this.getInfo();
  },

  methods: {
    async getInfo() {
      let me = this;
      try {
        const result = await axios.post('', {
          query: `
            query commercial_establishment($name: String) {
              commercial_establishment(name: $name) {
                name,
                description,
                phone,
                logo
              }
            }
          `,
          variables: {
            name: 'barber'
          }
        });
        console.log('query...');
        me.info_establishment = result.data.data.commercial_establishment;

      } catch (err) {
        console.log(err);
      }      
    }
  },

  
}
</script>

<style scoped>

/* Texto en una unica linea
.headerClass{
    white-space: nowrap ;
    word-break: normal;
    overflow: hidden ;
    text-overflow: ellipsis;
} */

</style>