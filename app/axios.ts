import * as Axios from 'axios'
const config = require('json!../config.json')

export default Axios({
  url: 'https://api.builddirect.io',
  headers: {
    'Ocp-Apim-Subscription-Key': config.apiKey
  }
})
