<template>
    <div id="order_pending">
        <v-banner :single-line=true>
            Order Pendings
        </v-banner>
        <hr />
        <v-data-table
            :headers="headers"
            :items="items"
            class="elevation-1"
            :fixed-header="fixed_header"
            :items-per-page="5"
        >
            <template v-slot:item.options="{ item }">
                <v-icon small class="mr-2" @click="viewOrder(item)">
                    mdi-eye
                </v-icon>
            </template>
            <template v-slot:item.user="{ item }">
                {{item.user.name}} {{item.user.lastname}}
            </template>

            <template v-slot:item.state="{ item }">
                <div v-if="item.state==1">
                    <span class="blue--text">Active</span>
                </div>
                <div v-else>
                    <span class="red--text">Canceled</span>
                </div>
            </template>
            <template v-slot:no-data>
                No Items Found!
            </template>

        </v-data-table>
        <template>
            <modal-order-pending  :visible="showModalInfo" :itemSel="itemSelected" @close="showModalInfo=false"></modal-order-pending>
        </template>
    </div>
</template>

<script>
import axios from 'axios';
import ModalOrderPending from '@/components/ModalOrderPending.vue';

export default {
    name: 'order_pending',

    data() {
        return {
            fixed_header: true,
            showModalInfo: false,
            headers: [
                {text: "Voucher", align: "right", sortable: true, value: "voucher"},
                {text: "Date", align: "left", sortable: true, value: "date"},
                {text: "Time", align: "left", sortable: true, value: "time"},
                {text: "Status", align: "left", sortable: true, value: "state"},
                {text: "Price", align: "right", sortable: true, value: "price"},
                {text: "Quantity", align: "right", sortable: true, value: "quantity"},
                {text: "Customer", align: "left", sortable: true, value: "user"},
                {text: "Options", value:"options", sortable: false},
            ],
            items: [],
            itemSelected: {}
        }
    },

    components: {
        ModalOrderPending
    },

    created() {
        this.getOrderPending();
    },

    methods: {
        async getOrderPending() {
            let me = this;
            let idUser = this.$store.state.user._id;
            
            try {
                const result = await axios.post('', {
                query: `
                    query booking($id: ID) {
                        booking(commercialID: $id) {
                            id,
                            date,
                            time,
                            state,
                            price,
                            quantity,
                            voucher,
                            user {
                                name
                                lastname
                            }
                        }
                    }
                `,
                variables: {
                    id: idUser
                }
                });

                me.items = result.data.data.booking;

            } catch (err) {
                console.log(err);
            }
        },

        viewOrder(item) {
            this.itemSelected = item;
            this.showModalInfo=true
        }
    },
}
</script>

<style scoped>

</style>