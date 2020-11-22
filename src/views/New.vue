<template>
  <div>
    <h1>New beer</h1>
    <beer-form @createOrUpdate="createOrUpdate"></beer-form>
  </div>
</template>

<script>
import BeerForm from '../components/BeerForm.vue'
import { api } from '../helpers/helpers'
export default {
  name: 'new-beer',
  components: {
    'beer-form': BeerForm,
  },
  methods: {
    createOrUpdate: async function(beer) {
      const res = await api.createbeer(beer)
      this.flash('beer created', 'success')
      this.$router.push(`/beers/${res._id}`)
    },
  },
}
</script>
