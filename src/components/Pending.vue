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
            <template v-slot:items="props">                
                <td>{{ props.item.order }}</td>
                <td>{{ props.item.date }}</td>
                <td>{{ props.item.status }}</td>
                <td>{{ props.item.total }}</td>
            </template>            
            <template v-slot:no-data>
                No Items Found!
            </template >

        </v-data-table>
    </div>
</template>

<script>
    export default {
        name: 'order_pending',

        data() {
            return {
                fixed_header: true,
                headers: [
                    {text: "# Order", align: "left", sortable: true, value: "order"},
                    {text: "Date", align: "left", sortable: true, value: "date"},
                    {text: "Status", align: "left", sortable: true, value: "status"},
                    {text: "Total", align: "left", sortable: false, value: "total"},
                ],
                items: []
            }
        }
    }
</script>

<style scoped>

</style>