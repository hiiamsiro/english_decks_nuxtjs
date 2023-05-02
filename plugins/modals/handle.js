import Layout from './layout.vue'

const VModal = {
  install(Vue) {
    this.EventBus = new Vue()

    // eslint-disable-next-line vue/component-definition-name-casing
    Vue.component('v-modal', Layout)

    Vue.prototype.$modal = {
      open(params) {
        VModal.EventBus.$emit('open', params)
      },
      close(params) {
        VModal.EventBus.$emit('close', params)
      },
    }
  },
}
export default VModal
