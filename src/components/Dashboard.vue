<template>
  <div id="dashboard">
    <h1>
      Dashboard
    </h1>
    <v-card class="mx-auto">
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-row>
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>
            </v-row>
          </v-col>
          <v-col cols="7">
            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illo nisi repellendus dolor officia corrupti dignissimos esse, iste asperiores itaque quos cum beatae rem nulla iure, non possimus quis sequi!</div>
            </v-card-text>
          </v-col>
          <v-col cols="auto" class="pl-0">
            <v-row class="flex-column ma-0 fill-height">
              <v-col class="px-0">
                <v-chip class="ma-2">
                  <v-icon>mdi-cards-heart</v-icon>
                  Likes
                </v-chip>
              </v-col>
              <v-col class="px-0">
                <v-chip class="ma-2">
                  <v-icon>mdi-bookmark</v-icon>
                  Favorites
                </v-chip>
              </v-col>
              <v-col class="px-0">
                <v-chip class="ma-2">
                  <v-icon>mdi-share-variant</v-icon>
                  Share
                </v-chip>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- <v-col cols="4" class="text-center pl-0" sm="12">
          <v-row class="fill-height" :justify="justify" :align="alignment">
            <v-col class="px-0">
              <v-btn icon>
                <v-icon>mdi-cards-heart</v-icon>
              </v-btn>
            </v-col>
            <v-col class="px-0">
              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>
            </v-col>
            <v-col class="px-0">
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col> -->

        <!-- <v-col cols="8" sm="12">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>
        </v-col> -->
      </v-container>
    </v-card>
  </div>
</template>