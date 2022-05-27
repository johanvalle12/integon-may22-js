<template>
  <div id="app">
    <AppHeader />
    <div class="flex flex-col md:flex-row">
      <AppProfileForm @submit="update($event)"/>
      <AppProfileDisplay :formData="formData"/>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/App-Header.vue'
import AppProfileForm from './components/App-Profile-Form.vue'
import AppProfileDisplay from './components/App-Profile-Display.vue'

export default {
  name: 'App',
  data() {
    return {
      formData: {}
    }
  },
  methods: {
    update(formData) {
      console.log(formData);
      this.formData = formData
    }
  },
  components: {
    AppHeader,
    AppProfileForm,
    AppProfileDisplay
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
