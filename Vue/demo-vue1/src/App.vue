<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <CardExample>
        <template v-slot:image>
          <img src="https://picsum.photos/id/1015/300" />
        </template>
        
        <template #title>
          <h2>My Holiday picture</h2>
        </template>
        
        <template #description>
          <p>Here I can describe the contents of the picture.</p>
          <p>For example what we can see in the photo is a nice
          landscape.</p>
        </template>
    </CardExample> -->

    <MessageEditor @send="onSend($event)" />
    <MessageFeed :messages="messages" />
    
    <br>
    <DemoEventos @Avisale="respuestaEvento"/>
    <CountableExample />
    <FiltersDemo :dato="lorem | ellipsis" />
    <SlottedComponent>
      <h3>Esto va en el slot</h3>
    </SlottedComponent>
    <br>
    <RepeatExample :config="{ times: 3, content: 'Repeat me.' }" />
    <GreetingExample />
    <button @click="newGreeting()">New Greeting</button>
    <BindingDemo :dato1=input1 v-bind:dato2=input2 dato3="789" />
    <DemoAxios />
    <SearchComponent />
    <DemoWatcher />
    <EjemploDirectivas />
    <EjemplosData />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!--<MatematicoOperacion :num1='5' :num2='10' operador='+'/>
    <PugTest /> -->
    <CuentaCaracteres />
    <CarritoDeCompras />
    <!-- <MatematicoOperacion :num1='5' :num2='10' operador='-'/>
    <MatematicoOperacion :num1='5' :num2='10' operador='*'/>
    <MatematicoOperacion :num1='5' :num2='10' operador='/'/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import MatematicoOperacion from './components/Matematico.vue'
// import PugTest from './components/Pug-test.vue'
import CuentaCaracteres from './components/Cuenta-caracteres.vue'
import EjemploDirectivas from './components/Ejemplo-Directivas.vue'
import CarritoDeCompras from './components/Carrito-De-Compras.vue'
import EjemplosData from './components/Ejemplos-Data.vue'
import DemoWatcher from './components/Demo-Watcher.vue'
import SearchComponent from './components/Search-Component.vue'
import DemoAxios from './components/Demo-Axios.vue'
import BindingDemo from './components/Binding-Demo.vue'
import GreetingExample from './components/Greetings-Example.vue'
import RepeatExample from './components/Repeat-Example.vue'
import SlottedComponent from './components/Slotted-Component.vue'
//import CardExample from './components/Card-Example.vue'
import FiltersDemo from './components/FiltersDemo.vue'
import CountableExample from './components/CountableExample.vue'
import DemoEventos from './components/Demo-Eventos.vue'
import MessageEditor from './components/MeesageEditor.vue'
import MessageFeed from './components/MessagesFeed.vue'

import { ellipsis } from '../src/utils/filters'

const possibleGreetings = [
    { greeting: 'Hello', who: 'Vue.js' },
    { greeting: 'Hey', who: 'Everyone' },
    { greeting: 'Hi', who: 'JavaScript' }
]

export default {
  name: 'App',
  data() {
    return {
      input1: '123',
      input2: '456',
      input3: '789',
      currentIndex: 0,
      lorem: 'Un texto de ejemplo mayor a 14 caracteres maifriend',
      messages: []
    }
  },
  computed: {
        currentGreeting() {
            return possibleGreetings[this.currentIndex]
        },
        greeting() {
            return this.currentGreeting.greeting
        },
        who() {
            return this.currentGreeting.who
        }
    },
    methods: {
        newGreeting() {
            this.currentIndex = this.currentIndex === possibleGreetings.length-1 ? 0 : this.currentIndex + 1
        },
        respuestaEvento($event) {
          console.log($event);
          alert(`Hola bb ${$event}`);
        },
        onSend(message) {
          this.messages = [...this.messages, message]
        }
    },
  components: {
    HelloWorld,
    // MatematicoOperacion,
    // PugTest,
    CuentaCaracteres,
    EjemploDirectivas,
    CarritoDeCompras,
    EjemplosData,
    DemoWatcher,
    SearchComponent,
    DemoAxios,
    BindingDemo,
    GreetingExample,
    RepeatExample,
    SlottedComponent,
    //CardExample,
    FiltersDemo,
    CountableExample,
    DemoEventos,
    MessageEditor,
    MessageFeed
  },
  filters: {
    ellipsis
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
