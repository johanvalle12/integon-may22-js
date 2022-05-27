<template>
    <button @click="botonClick()"> Click Me!!!</button>
</template>

<script>

export default {
    data() {
        return {
            message:"Mensaje del evento"
        }
    },
    methods: {
        botonClick: function (){
            this.$emit('Avisale', this.message);
        }
    }
}
</script>
