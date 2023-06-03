<template>
  <div class="c_3 mb-3">
    <div class="card">
      <div class="front-card">
        <img :src="picture" />
      </div>
      <div class="back-card">{{ keyword }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    picture: {
      type: String,
      required: false,
      default: '',
    },
    keyword: {
      type: String,
      required: false,
      default: '',
    },
  },
  mounted() {
    console.log('this.picture', this.picture)
  },
}
</script>
