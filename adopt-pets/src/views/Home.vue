<template>
  <div class='home-container'>
    <h1>Add a new best friend</h1>
    {{ getAllCats.length }}
    {{ animalsCount }}
    <button @click="togglePetForm" class="btn btn-primary">Add New Pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForms">
      <b-form-group id="input-group-1" label="Pet's Name" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="formData.name"
          type="name"
          placeholder="Enter Pet Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-2">
        <b-form-select
          id="input-2"
          v-model="formData.species"
          :options="['cats', 'dogs']"
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Pet's Age" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="formData.age"
          type="number"
          placeholder="Enter Pet Age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',

  data () {
    return {
      showPetForms: false,
      formData: {
        name: '',
        age: '',
        species: ''
      }
    }
  },

  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllCats'
    ])
  },

  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.showPetForms = !this.showPetForms
    },
    handleSubmit () {
      const { name, age, species } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)
      this.formData = {
        name: '',
        age: '',
        species: ''
      }
    }
  }
}
</script>
