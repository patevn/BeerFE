<template>
  <div>
    <h1>Show beer</h1>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="beers icon"></i> beer</div>
      <input type="text" readonly :value="beer.beer" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="info circle icon"></i> Details</div>
      <input type="text" readonly :value="beer.details" />
    </div>
    <div id="app"><stars-rating :config="config"></stars-rating></div>
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
import starsRating from '../components/rating-stars'
export default {
  name: 'show',
  components: {
    starsRating: starsRating,
  },
  data() {
    return {
      beer: '',
      config: {
        rating: 1.0,
        isIndicatorActive: true,
        style: {
          fullStarColor: '#ed8a19',
          emptyStarColor: '#737373',
          starWidth: 100,
          starHeight: 100,
        },
      },
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
