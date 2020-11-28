<template>
  <div>
    <h1>Edit beer</h1>
    <beer-form @createOrUpdate="createOrUpdate" :beer="this.beer"></beer-form>
  </div>
</template>

<script>
import BeerForm from '../components/BeerForm.vue'
import { api } from '../helpers/helpers'

export default {
  name: 'edit',
  components: {
    'beer-form': BeerForm,
  },
  data: function() {
    return {
      beer: {},
    }
  },
  methods: {
    createOrUpdate: async function(beer) {
      await api.updatebeer(beer)
      this.flashMessage.info({
        title: 'success',
        message: 'beer updated sucessfully',
      })
      this.$router.push(`/beers/${beer._id}`)
    },
  },
  async mounted() {
    this.beer = await api.getbeer(this.$route.params.id)
  },
}
</script>
