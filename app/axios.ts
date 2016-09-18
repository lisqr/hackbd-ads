import * as Axios from 'axios'
const config = require('json!../config.json')

export const buildDirectAxios = Axios.create({
  baseURL: 'https://api.builddirect.io',
  headers: {
    'Ocp-Apim-Subscription-Key': config.apiKey
  }
})

export const localhostAxios = Axios.create({
  baseURL: 'http://localhost:444'
})
