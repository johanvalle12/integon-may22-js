<template>
    <div>{{ greeting }} {{ who }}</div>
</template>
<script>
    export default {
        props: {
            who: { // Se estan declarando las propiedades con 'reglas iniciales' que son: la variable es de tipo string y requerida.
                type: String,
                required: false,
                default: "Abre tus ojos"
            },
            greeting: {
                type: String,
                required: false,
                default: "Oye"
            },
        }
        //props: ['greeting', 'who'] // Si se declaran las variables de esta forma, por defecto son opcionales.
    }
</script>