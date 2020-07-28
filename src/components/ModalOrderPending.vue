<template>
    <v-dialog
        v-model="show"
        width="800"
        v-if="itemSel && itemSel.user"
        >

        <v-card>
            <v-card-title class="headline grey lighten-2">
                Order Pending
            </v-card-title>

            <v-card-text>
                <v-form>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="3">
                                <v-text-field
                                    :value="`${itemSel.date}`"
                                    label="Date"
                                    filled
                                    readonly
                                >
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="3">
                                <v-text-field
                                    :value="`${itemSel.time}`"
                                    label="Time"
                                    filled
                                    readonly
                                >
                                </v-text-field>
                            </v-col>                        
                            <v-col cols="12" sm="6">
                                <v-text-field
                                    :value="`${itemSel.user.name} ${itemSel.user.lastname}`"
                                    label="Customer"
                                    filled
                                    readonly
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="3">
                                <v-text-field
                                    :value="`${itemSel.voucher}`"
                                    label="Voucher"
                                    filled
                                    readonly
                                >
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="3">
                                <v-text-field
                                    :value="`${itemSel.price}`"
                                    label="Price"
                                    filled
                                    readonly
                                >
                                </v-text-field>
                            </v-col>                        
                            <v-col cols="12" sm="3">
                                <v-text-field
                                    :value="`${itemSel.quantity}`"
                                    label="Quantity"
                                    filled
                                    readonly
                                >
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="3">
                                <v-switch
                                    v-model="itemSel.state"
                                    :label="`State: ${itemSel.state.toString()}`"
                                    color="#673AB7"
                                ></v-switch>
                            </v-col>
                        </v-row>
                        <v-row class="text-center">
                            <v-col cols="12" sm="12" v-if="!itemSel.rating">
                                <v-rating v-model="itemSel.rating" readonly></v-rating>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="secondary"
                    text
                    @click="show = false"
                >
                    Cancel
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="updateOrder"
                >
                    Save
                </v-btn>
            </v-card-actions>
            
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'modal-order-pending',

    props: {
        visible: {type: Boolean, required: true},
        itemSel: {type: Object, required: true},
    },

    data() {
        return {
        }
    },

    methods: {
        updateOrder() {
            this.show = false;
        }
    },
    
    computed: {
        show: {
            get() {
                return this.visible
            },
            set (value) {
                if (!value) {
                    this.$emit('close')
                }
            }
        },
    }
}
</script>

<style>

</style>
