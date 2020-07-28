<template>
  <div id="dashboard">
    <template v-if="statusPage == 200">
      <v-card class="mx-auto">
        <v-container>
          <v-row>
            <v-col cols="12" sm="3">
              <v-row>
                <v-img
                  class="white--text align-end justify-center align-center"
                  min-height="100px"
                  width="100%"
                  :src="( info_establishment.logo = '' ? defaultImage : info_establishment.logo)"
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
            <v-col cols="auto">
              <v-row class="flex-rows ma-0 fill-height">
                <v-col class="px-0">
                  <v-chip class="ma-1">
                    <v-icon>mdi-facebook</v-icon>
                    Facebook
                  </v-chip>
                </v-col>
                <v-col class="px-0">
                  <v-chip class="ma-1">
                    <v-icon>mdi-twitter</v-icon>
                    Twitter
                  </v-chip>
                </v-col>
                <v-col class="px-0">
                  <v-chip class="ma-1">
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
    </template>

    <template v-else>
      <page-204></page-204>
    </template>
  </div>
</template>

<script>
import axios from 'axios';
import Pending from '@/components/Pending.vue';
import Page204 from '@/components/Page204.vue';

export default {
  name: 'dashboard',

  data() {
    return {
      defaultImage: require('@/assets/default.jpg'),      
      statusPage: 200,
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

  components: {
    Pending,
    Page204
  },

  methods: {
    async getInfo() {
      let me = this;
      let idUser = this.$store.state.user._id;
      
      try {
        const result = await axios.post('', {
          query: `
            query commercial_establishment($id: ID) {
              commercial_establishment(id: $id) {
                name,
                description,
                phone,
                logo
              }
            }
          `,
          variables: {
            id: idUser
          }
        });
        
        me.info_establishment = result.data.data.commercial_establishment;
        
        if (me.info_establishment == null) {
          me.statusPage = 204;
        }

      } catch (err) {
        console.log('err : ', err);
        me.statusPage = 204;
      }      
    }
  },
}
</script>

<style scoped>

</style>