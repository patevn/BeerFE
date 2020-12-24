<template>
  <div>
    <h1>Show beer</h1>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="beer icon"></i> Beer</div>
      <input type="text" readonly :value="beer.beer" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label"><i class="info circle icon"></i> Details</div>
      <input type="text" readonly :value="beer.details" />
    </div>
    <div v-if="this.beer.rating" class="ui labeled input fluid">
      <div class="ui label"><i class="star icon"></i> Rating</div>
      <stars-rating :config="stars"></stars-rating>
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
import starsRating from '../components/rating-stars'
export default {
  name: 'show',
  components: {
    starsRating: starsRating,
  },
  data() {
    return {
      beer: '',
    }
  },
  computed: {
    stars() {
      return {
        rating: this.beer.rating,
        isIndicatorActive: false,
        style: {
          fullStarColor: '#ed8a19',
          emptyStarColor: '#FFFFFF',
          starWidth: 20,
          starHeight: 20,
        },
      }
    },
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
