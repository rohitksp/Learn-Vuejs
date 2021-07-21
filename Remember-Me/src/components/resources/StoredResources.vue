<template>
  <ul>
    <learning-resource v-for="res in resource" :key="res.id" :res="res">
    </learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
  props: ['resource'],
  components: {
    LearningResource
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
