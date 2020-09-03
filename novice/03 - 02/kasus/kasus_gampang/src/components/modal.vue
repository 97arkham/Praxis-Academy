<template>
  <div>
    <h1>haoo</h1>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
      <!-- use the modal component, pass in the prop -->
      <modal2 v-if="showModal" @close="showModal = false">
        <!--
      you can use custom content here to overwrite
      default content
    -->
        <h3 slot="header">custom header</h3>
      </modal2>
      
  </div>
</template>

<script>
import modal2 from './modal2'
export default {
  
  data: ()=>{
    return{
      showModal: false
    }
  },
  components:{
        modal2
    }
}
</script>

