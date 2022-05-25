<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <DemoAxios />
    <SearchComponent />
    <DemoWatcher />
    <EjemploDirectivas />
    <EjemplosData />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MatematicoOperacion :num1='5' :num2='10' operador='+'/>
    <PugTest /> -->
    <CuentaCaracteres />
    <CarritoDeCompras />
    <!-- <MatematicoOperacion :num1='5' :num2='10' operador='-'/>
    <MatematicoOperacion :num1='5' :num2='10' operador='*'/>
    <MatematicoOperacion :num1='5' :num2='10' operador='/'/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MatematicoOperacion from './components/Matematico.vue'
// import PugTest from './components/Pug-test.vue'
import CuentaCaracteres from './components/Cuenta-caracteres.vue'
import EjemploDirectivas from './components/Ejemplo-Directivas.vue'
import CarritoDeCompras from './components/Carrito-De-Compras.vue'
import EjemplosData from './components/Ejemplos-Data.vue'
import DemoWatcher from './components/Demo-Watcher.vue'
import SearchComponent from './components/Search-Component.vue'
import DemoAxios from './components/Demo-Axios.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // MatematicoOperacion,
    // PugTest,
    CuentaCaracteres,
    EjemploDirectivas,
    CarritoDeCompras,
    EjemplosData,
    DemoWatcher,
    SearchComponent,
    DemoAxios
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
