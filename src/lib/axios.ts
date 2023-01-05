import axios from 'axios'

export const api = axios.create({
  baseURL: '/api', // back e front estao na mesma URL
})
