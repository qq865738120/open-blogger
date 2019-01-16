import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios.create({
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})
