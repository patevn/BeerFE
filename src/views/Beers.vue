<template>
  <div>
    <h1>beers</h1>
    <table id="beers" class="ui celled compact table">
      <thead>
        <tr>
          <th><i class="calendar plus icon"></i>beer</th>
          <th><i class="info circle icon"></i>Detail</th>
          <th><i class="lock open icon"></i></th>
          <th><i class="edit icon"></i></th>
          <th><i class="trash icon"></i></th>

          <th colspan="3"></th>
        </tr>
      </thead>
      <tr v-for="(beer, i) in beers" :key="i">
        <td>{{ beer.beer1 }}</td>
        <td>{{ beer.beer2 }}</td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'show', params: { id: beer._id } }"
            >Show</router-link
          >
        </td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'edit', params: { id: beer._id } }"
            >Edit</router-link
          >
        </td>
        <td
          width="75"
          class="center aligned"
          @click.prevent="onDestroy(beer._id)"
        >
          <a :href="`/beers/${beer._id}`">Delete</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { api } from '../helpers/helpers'
export default {
  name: 'beers',
  data() {
    return {
      beers: [],
    }
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm('Are you sure?')
      if (!sure) return
      await api.deletebeer(id)
      this.flash('beer deleted sucessfully!', 'success')
      const newbeers = this.beers.filter((beer) => beer._id !== id)
      this.beers = newbeers
    },
  },
  async mounted() {
    this.beers = await api.getbeers()
  },
}
</script>
