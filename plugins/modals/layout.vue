<template>
  <div modal="true">
    <div>
      <div v-if="visible" :data-modal="name" class="modal">
        <div
          aria-modal="true"
          data-reach-dialog-content="true"
          tabindex="1"
          class="modal_mask"
        >
          <div class="modal_body">
            <slot :payload="payload" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalPlugin from './modal-plugin.js'
export default {
  name: {
    type: String,
    required: true,
  },
  data() {
    return {
      payload: null,
      visible: false,
    }
  },
  beforeMount() {
    // open event
    ModalPlugin.EventBus.$on('open', (params) => {
      if (this.name === params.name) {
        this.open(params)
      }
    })

    // close event
    ModalPlugin.EventBus.$on('close', (params) => {
      if (this.name === params.name) {
        this.open(params)
      }
    })
  },
  methods: {
    open(params) {
      this.visible = true
    },
    close(params) {
      this.visible = false
    },
  },
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(18, 18, 18, 0.8);
  z-index: 999;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
