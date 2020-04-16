import axios from 'axios'
export const baseURL = 'https://randomuser.me/api'

const user = axios.create({
  baseURL
})

export default user
