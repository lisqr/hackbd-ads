import * as Axios from 'axios'
const config = require('json!../config.json')

export default Axios.create({
  baseURL: 'https://api.builddirect.io',
  headers: {
    'Ocp-Apim-Subscription-Key': config.apiKey
  }
})
