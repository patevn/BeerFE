<template>
  <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="calendar plus icon"></i>beer</div>
      <input type="text" placeholder="Enter beer..." v-model="beer.beer1" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="info circle icon"></i> Details</div>
      <input type="text" placeholder="Enter Details" v-model="beer.beer2" />
    </div>

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'beer-form',
  props: {
    beer: {
      type: Object,
      required: false,
      default: () => {
        return {
          beer1: '',
          beer2: '',
        }
      },
    },
  },
  data() {
    return {
      errorsPresent: false,
    }
  },
  methods: {
    onSubmit: function () {
      if (this.beer.beer1 === '' || this.beer.beer2 === '') {
        this.errorsPresent = true
      } else {
        this.$emit('createOrUpdate', this.beer)
      }
    },
  },
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
