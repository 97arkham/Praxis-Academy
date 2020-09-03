<template>
    <div>
        <hr>
        <h1>COMPUTED</h1>
        <p>hasil dari {{bil1}} + {{bil2}} adalah: {{jumlah}}</p>
        <hr>
    </div>
</template>
<script>
export default {
    data: ()=>{
        return{
            bil1: 1,
            bil2: 2
        }
    },
    computed:{
        jumlah: function(){
            return this.bil1 + this.bil2
        }
    }
}
</script>