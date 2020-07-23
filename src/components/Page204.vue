<template>
  <v-container fluid>
        <v-layout column>
            <v-flex xs12>
                <v-layout align-center justify-center column fill-height>
                    <v-img :src="noRecordImage" class="imgNoRecord"></v-img>
                </v-layout>
            </v-flex>
            <v-flex xs12 align-self-center>
                <h4>Nothing exists here</h4>
                <span>We couldn't find any results for your search. Try clearing some filters and try again.</span>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'page204',

    data() {
        return {
            noRecordImage: require('@/assets/204.png'),
        }
    }
}
</script>

<style scoped>
.imgNoRecord {
    width: 300px;
}

@media (max-width: 350px) {
    .item {
        width: 100px;
    }
}
</style>