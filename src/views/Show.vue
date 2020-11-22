<template>
  <div>
    <h1>Show beer</h1>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="beers icon"></i> beer</div>
      <input type="text" readonly :value="beer.beer1" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="info circle icon"></i> Details</div>
      <input type="text" readonly :value="beer.beer2" />
    </div>
    <div class="actions">
      <router-link
        :to="{ name: 'edit', params: { id: this.$route.params.id } }"
      >
        Edit beer
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers'
export default {
  name: 'show',
  data() {
    return {
      beer: '',
    }
  },
  async mounted() {
    this.beer = await api.getbeer(this.$route.params.id)
  },
}
</script>

<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>
