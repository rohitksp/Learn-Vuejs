<template>
  <div id="app">
    <div id="nav">
      <h1>NewsFeed</h1>
      <button @click="togglePanel()">Add Post</button>
    </div>
    <hr />
    <h1 v-for="(post) in posts" :key="post.id">
       <button>Edit</button>
      <button>Delete</button>
      {{post.userName}}<br>
      {{post.title}}<br>
      <p>{{post.body}}</p><br>
      <hr />
    </h1>
    <div class="modal" v-if="showAddPost">
      <div class="modal-content">
        <span @click="showAddPost = false" class="close">&times;</span>
        <h3>Add New Post</h3>
        <hr />
        <form>
          <label>UserName</label><br>
          <input
            type="text"
            name="userName"
            :value="postData.userName"
            @change="onInputChange"
            >
          <br>
          <label>Title</label><br>
          <input
            type="text"
            name="title"
            :value="postData.title"
            @change="onInputChange"
            >
          <br>
          <label>Description</label><br>
          <input
            type="text"
            name="body"
            :value="postData.body"
            @change="onInputChange"
            >
          <br>
          <button @click.prevent="createPost()" type="submit">Submit</button>
        </form>
   </div>
  </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: [],
      showAddPost: false,
      postData: {
        userName: '',
        title: '',
        body: ''
      }
    }
  },

  methods: {
    togglePanel () {
      this.showAddPost = true
    },
    fetchPosts () {
      fetch('http://localhost:3001/posts/')
        .then(response => response.json())
        .then(data => (this.posts = data))
    },
    createPost () {
      fetch('http://localhost:3001/posts/', this.postData, {
        method: 'post'
      })
        .then(() => {
          this.fetchPosts()
          this.postData.userName = ''
          this.postData.title = ''
          this.postData.body = ''
           this.showAddPost = false
        })
    },
    onInputChange (event) {
      const { name, value } = event.target
      const postData = this.postData
      postData[name] = value
      this.postData = postData
    }
  },

  mounted: function () {
    this.fetchPosts()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px 20px;

  a {
    font-weight: bold;
    color: red;
    background-color: black;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.modal-content {
  background-color: #fefefe;
  margin: 3% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 35%;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.modal {
  position: fixed;
  top: 2px;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.6);
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
