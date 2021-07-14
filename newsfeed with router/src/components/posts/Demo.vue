<template>
  <div>
    <div v-for="post in getPosts" :key="post.id">
      <ul>
        <li>{{post.userName}}</li>
        <li>{{post.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Demo',

  methods: {
    ...mapActions(['getPostData'])
  },

  computed: mapGetters(['getPosts']),

  mounted () {
    this.getPostData()
  }
}
</script>