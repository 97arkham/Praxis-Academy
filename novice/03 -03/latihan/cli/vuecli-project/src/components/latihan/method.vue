<template>
    <div>
        <h1>Method</h1>
        <p>hasil dari {{bil1}}+{{bil2}} adalah : {{jumlah}}</p>
        <br>
        <button v-on:click="diproses">Proses</button>
        <hr>
    </div>
</template>

<script>
export default {
    data: ()=>{
        return{
            bil1: 1,
            bil2: 2,
            jumlah: null
        }
    },
    methods: {
        diproses(){
            return this.jumlah = this.bil1 + this.bil2
        }
    }
}
</script>