import axios from 'axios'

const httpClient = async ({ method, headers, data, url }) =>
  axios({
    method,
    headers,
    data,
    url
  })

export default httpClient
