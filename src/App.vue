<template>
  <v-app id="app">
    <v-navigation-drawer v-if="isLogged" v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <template>      
          <v-list-item :to="{path:'dashboard'}">
            <v-list-item-action>
              <v-icon>
                mdi-alpha-d-box
              </v-icon>
            </v-list-item-action>
            <v-list-item-title active>
                Dashboard
              </v-list-item-title>
          </v-list-item>
          <v-list-item :to="{path:'pending' }">
            <v-list-item-action>
              <v-icon>
                mdi-alpha-o-box
              </v-icon>
            </v-list-item-action>
            <v-list-item-title>
              Order Pending
            </v-list-item-title>
          </v-list-item>
          <v-list-item :to="{path:'' }">
            <v-list-item-action>
              <v-icon>
                mdi-alpha-h-box
              </v-icon>
            </v-list-item-action>
            <v-list-item-title>
              Order History
            </v-list-item-title>
          </v-list-item>
          <v-list-item :to="{path:'' }">
            <v-list-item-action>
              <v-icon>
                mdi-alpha-s-box
              </v-icon>
            </v-list-item-action>
            <v-list-item-title>
              Social Network
            </v-list-item-title>            
          </v-list-item>
          <v-list-item :to="{path:'' }">
            <v-list-item-action>
              <v-icon>
                mdi-alpha-p-box
              </v-icon>
            </v-list-item-action>
            <v-list-item-title>
              Products
            </v-list-item-title>
          </v-list-item>
        </template>
      </v-list>      
    </v-navigation-drawer>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="isLogged">
      </v-app-bar-nav-icon>
      <v-toolbar-title>Booking Agent</v-toolbar-title>

      <v-spacer></v-spacer>
            
      <v-chip class="ma-2" label @click="logout()" v-if="isLogged">
        <v-icon>mdi-login</v-icon>
        Logout
      </v-chip>
        
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer :inset="true" app color="success">
      <span class="px-4">@devfko</span>
    </v-footer>

  </v-app>
</template>

<script>
import Pending from '@/components/Pending.vue';

export default {
  name: 'App',

  data: () => ({
    drawer: true,
    dialogLogin: false
  }),

  created() {
    this.$store.dispatch("autoLogin");
  },

  computed: {
    isLogged() {
      (this.$store.state.user == null) ? this.drawer = false : this.drawer = true;
      return this.$store.state.user;
    }
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },

}
</script>