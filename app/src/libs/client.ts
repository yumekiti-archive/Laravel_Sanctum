import Axios from 'axios'

const client = Axios.create({
  baseURL: 'http://localhost:8000/api',
})

export default client;