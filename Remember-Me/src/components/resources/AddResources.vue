<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" ref="enteredTitle">
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" name="description" rows="3" ref="enteredDecs"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" id="link" name="link" ref="enteredUrl">
      </div>
      <base-button type="submit">Submit</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],
  methods: {
   submitForm() {
    const enteredTitle = this.$refs.enteredTitle.value;
    const enteredDecs = this.$refs.enteredDecs.value;
    const enteredUrl = this.$refs.enteredUrl.value;

    this.addResource(enteredTitle, enteredDecs, enteredUrl)
   }
 } 
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>