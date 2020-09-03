<template>
    <div>
        <h1>Watch</h1>
        <input type="text" v-model="isi">{{keterangan}}
    </div>
</template>

<script>
export default {
    data: ()=>{
        return{
            isi: '',
            keterangan:''
        }
    },
    watch:{
        isi: function(){
        this.keterangan = 'Sedang Mengetik ....'
        } 
    }
}
</script>