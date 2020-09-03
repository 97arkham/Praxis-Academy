<template>
    <div>
        <p>{{hello_massage}}</p>
    </div>
</template>

<script>
export default {
    data: ()=>{
        return{
            hello_message: "Hello, there welcome to VueJS world",
            div_title: "This is my intro div",
        }
    },
    beforeCreate: function(){ 
    alert('Before Create');
    },
    created: function(){ 
    alert('Created');
    },
    beforeMount: function(){ 
    alert('Before Mount');
    },
    mounted: function(){ 
    alert('Mounted');
    },
    beforeUpdate: function(){ 
    alert('Before Update');
    },
    updated: function(){ 
    alert('Updated');
    },
    beforeDestroy: function(){ 
    alert('Before Destroy');
    },
    destroyed: function(){ 
    alert('Destroyed');
    }
}
</script>