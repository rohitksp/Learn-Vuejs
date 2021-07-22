<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResourcesActiveTab">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resources')" :mode="addResourcesActiveTab">Add Resources</base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResources from './AddResources.vue';

export default {
  components: {
    StoredResources,
    AddResources
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official_guide',
          title: 'Official Guide',
          description: 'This is a office documents to vue.',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org'
        }
      ]
    }
  },
  provide() {
    return {
      resources: this.storedResources,
			addResource: this.addResource
    }
  },
  computed: {
		addResourcesActiveTab() {
			return this.selectedTab === 'add-resources' ? null : 'flat';
		},
    storedResourcesActiveTab() {
			return this.selectedTab === 'stored-resources' ? null : 'flat';
		}
  },
  methods: {
    setSelectedTab(tab) {
      return this.selectedTab = tab
    },
		addResource(title, description, link) {
			const addPerson = {
				title: title,
				description: description,
				link: link
			}
			this.storedResources.unshift(addPerson);
			this.selectedTab = 'stored-resources';
		}
  }
}
</script>