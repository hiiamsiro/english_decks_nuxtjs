import Layout from "./layout.vue";

export default {
    install(Vue) {
        this.EventBus = new Vue();

        Vue.component('v-modal', Layout);

        Vue.prototype.$modal = {
            open(params) {
                this.EventBus.$emit('open', params)
            },
            close(params) {
                this.EventBus.$emit('close', params)
            }
        }
    }
}