<template>
<div id="app">
   <!-- {{ message }}
   <filepertama />
   <computed/>
   <method/>
   <watch/> -->
   <lifecycle1/>
</div>
</template>

<script>
// import filepertama from './components/filepertama';
// import computed from './components/latihan/computed';
// import method from './components/latihan/method';
// import watch from './components/latihan/watch';
import lifecycle1 from './components/latihan/lifecycle1';
export default { 
  name: 'App',
  data() {
    return {
      // message: 'Hello Vue!',
    }
  },
  components:{
        // filepertama,
        // computed,
        // method,
        // watch,
        lifecycle1
}
  
}
</script>

