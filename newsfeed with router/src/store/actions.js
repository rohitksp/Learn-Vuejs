import axios from 'axios'

export default {
	async getPostData({ commit }) {
		commit("loading", true )
    const response = await axios.get("http://localhost:3002/posts")
		commit("loading", false)
    commit("setPostData", response.data.reverse());
  }
}