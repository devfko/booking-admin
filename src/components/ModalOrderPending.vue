<template>
    <div class="modal" v-show="msg">
        {{msg}}
        <!-- <button @click.prevent="hide" class="mt-3 border-b border-teal font-semibold">Close</button> -->
    </div>
</template>

<script>
export default {
    name: 'modal-order-pending',

    data() {
        return {
            showModal: false
        }
    },

    props: ['msg'],

    // methods: {
    //     hide() {
    //         // this.showModal = false;
    //         this.$emit("input", !this.msg);
    //     }
    // }
}
</script>

<style>

</style>