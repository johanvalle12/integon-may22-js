<template>
    <div>
        Cadena: <input type="text" v-model="cadena" id="txtInput" @keyup="cuentaCaracteres()" />
        <p>Has escrito {{ contador }} caracteres.</p>
    </div>
</template>

<script>
    export default {
        name: 'CuentaCaracteres',
        props: {
            
        },
        mounted(){
            this.cuentaCaracteres()
        },
        data() {
            return {
                contador: 0,
                cadena: 'Texto Por Defecto'
            }
        },
        methods: {
            cuentaCaracteres: function(){
                this.contador = this.cadena.length;
            }
        },
        // watch: {
        //     cadena: {
        //         handler() {
        //             console.log('Contando caracteres');
        //             this.cuentaCaracteres();
        //         },
        //         immediate:true
        //     }
        // }
    }
</script>