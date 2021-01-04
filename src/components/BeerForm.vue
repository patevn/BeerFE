<template>
  <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="beer icon"></i>Beer</div>
      <input type="text" placeholder="Enter beer..." v-model="beer.beer" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="info circle icon"></i> Details</div>
      <input type="text" placeholder="Enter Details" v-model="beer.details" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label"><i class="star icon"></i> Rating</div>
      <select class="ui dropdown" v-model="beer.rating">
        <option>1</option>
        <option>1.5</option>
        <option>2</option>
        <option>2.5</option>
        <option>3</option>
        <option>3.5</option>
        <option>4</option>
        <option>4.5</option>
        <option>5</option>
      </select>
    </div>
    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'beer-form',
  components: {},
  props: {
    beer: {
      type: Object,
      required: false,
      default: () => {
        return {
          beer: '',
          details: '',
          rating: '',
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
    onSubmit: function() {
      if (
        this.beer.beer === '' ||
        this.beer.details === '' ||
        this.beer.rating === ''
      ) {
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
