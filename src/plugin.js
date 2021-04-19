import MyComponent from './components/MyComponent'

export default {
  install (app) {
    app.component('MyComponent', MyComponent)
    app.config.globalProperties.$myPlugin = 'True'
  }
}