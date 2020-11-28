import axios from 'axios'
import Vue from 'vue'
import VueFlashMessage from '@smartweb/vue-flash-message'

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true,
  },
})

const baseURL = 'http://localhost:3000/beers/'

const handleError = fn => (...params) =>
  fn(...params).catch(error => {
    console.error(
      `${error.response.status}: ${error.response.statusText}`,
      'error'
    )
  })

export const api = {
  getbeer: handleError(async id => {
    const res = await axios.get(baseURL + id)
    return res.data
  }),
  getbeers: handleError(async () => {
    const res = await axios.get(baseURL)
    return res.data
  }),
  deletebeer: handleError(async id => {
    const res = await axios.delete(baseURL + id)
    return res.data
  }),
  createbeer: handleError(async payload => {
    const res = await axios.post(baseURL, payload)
    return res.data
  }),
  updatebeer: handleError(async payload => {
    const res = await axios.put(baseURL + payload._id, payload)
    return res.data
  }),
}
