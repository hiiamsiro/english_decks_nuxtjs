<template>
  <div>
    <default-header></default-header>
    <Nuxt />
  </div>
</template>

<script>
import DefaultHeader from '@/components/Header/DefaultHeader'
export default {
  components: {
    DefaultHeader,
  },
}
</script>
